module.exports = async (req, res) => {
    try {
        const SupabaseClient = require('../SupabaseClient');
        const { structure } = req.query;
        const { data, error } = await SupabaseClient.anonSupabaseClient
            .from('LearnPages')
            .select('title, information')
            .eq('title', structure);

        if (error) {
            throw new Error(error.message);
        }
        
        res.json(data);

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
