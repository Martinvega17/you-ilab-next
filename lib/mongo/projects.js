const { Collection, Db, Document, MongoClient } = require('mongodb');
const clientPromise = require('@/lib/mongo/client');

let client;
let db;
let projects;

async function init() {
    if (db) return;
    try {
        client = await clientPromise;
        db = client.db();
        projects = db.collection('projects');
    } catch (error) {
        throw new Error('Failed to connect to the database.');
    }
}

(async () => {
    await init();
})();

/// projects ///

export const getProjects = async ({
    query,
    page = 1,
    limit = 10
}) => {
    try {
        if (!projects) await init();

        const skip = (page - 1) * limit;

        const pipeline = [{ $skip: skip }, { $limit: limit }];

        if (query) {
            pipeline.unshift({
                $search: {
                    index: 'search',
                    text: {
                        query,
                        fuzzy: {
                            maxEdits: 1,
                            prefixLength: 3,
                            maxExpansions: 50
                        },
                        path: {
                            wildcard: '*'
                        }
                    }
                }
            });
        }

        await sleep(1000);

        const result = await projects.aggregate(pipeline).toArray();

        return { projects: result };
    } catch (error) {
        return { error };
    }
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const PipelineStage = {
    $search: {
        index: '',
        text: {
            query: '',
            fuzzy: {},
            path: {
                wildcard: ''
            }
        }
    },
    $skip: 0,
    $limit: 0
};
