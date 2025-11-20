import yaml from 'js-yaml';

/**
 * Load the sermon index from the manifest file
 * @returns {Promise<Array>} Array of sermon IDs
 */
async function loadSermonIndex() {
  try {
    const response = await fetch('/sermons/index.json');
    if (!response.ok) {
      throw new Error('Failed to load sermon index');
    }
    const index = await response.json();
    return index.sermons || [];
  } catch (error) {
    console.error('Error loading sermon index:', error);
    return [];
  }
}

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
 * Load all sermons dynamically from the index
 * @returns {Promise<Array>} Array of sermon objects sorted by date (newest first)
 */
export async function loadAllSermons() {
  try {
    // First, load the sermon index
    const sermonIds = await loadSermonIndex();

    if (sermonIds.length === 0) {
      console.warn('No sermons found in index');
      return [];
    }

    // Then load all sermons
    const sermons = await Promise.all(
      sermonIds.map(id => loadSermon(id))
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
