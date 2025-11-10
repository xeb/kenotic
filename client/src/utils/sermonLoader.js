import yaml from 'js-yaml';

// List of all sermon IDs (must be kept in sync with files in public/sermons/)
const SERMON_IDS = [
  'kenosis-creating-space',
  'end-of-empire-dawn-of-kingdom',
  'reality-not-rules',
  'keep-watch-hidden-identities',
  'no-breath-in-it',
  'spirits-agency-unembodied-power',
  'bearing-his-name'
];

/**
 * Load a single sermon's metadata and content
 * @param {string} id - The sermon ID
 * @returns {Promise<Object>} Sermon object with metadata and content
 */
export async function loadSermon(id) {
  try {
    const [ymlResponse, mdResponse] = await Promise.all([
      fetch(`/sermons/${id}.yml`),
      fetch(`/sermons/${id}.md`)
    ]);

    if (!ymlResponse.ok || !mdResponse.ok) {
      throw new Error(`Failed to load sermon: ${id}`);
    }

    const ymlText = await ymlResponse.text();
    const mdText = await mdResponse.text();

    const metadata = yaml.load(ymlText);

    return {
      ...metadata,
      content: mdText
    };
  } catch (error) {
    console.error(`Error loading sermon ${id}:`, error);
    throw error;
  }
}

/**
 * Load all sermons
 * @returns {Promise<Array>} Array of sermon objects sorted by date (newest first)
 */
export async function loadAllSermons() {
  try {
    const sermons = await Promise.all(
      SERMON_IDS.map(id => loadSermon(id))
    );

    // Sort by date, newest first
    return sermons.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('Error loading sermons:', error);
    return [];
  }
}

/**
 * Load landing page quotes
 * @returns {Promise<string>} Markdown content of quotes
 */
export async function loadQuotes() {
  try {
    const response = await fetch('/quotes.md');
    if (!response.ok) {
      throw new Error('Failed to load quotes');
    }
    return await response.text();
  } catch (error) {
    console.error('Error loading quotes:', error);
    return '';
  }
}
