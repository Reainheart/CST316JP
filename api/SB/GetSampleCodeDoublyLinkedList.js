module.exports = async (req, res) => {
    try {
        const SupabaseClient = require('../SupabaseClient');
        const { data, error } = await SupabaseClient.anonSupabaseClient
            .from('Examples')
            .select('Language, Example, Type')
            .eq('Type', 'Doubly Linked List');
        
        if (error) {
            throw new Error(error.message);
        }
    
        res.json(data);
    
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}