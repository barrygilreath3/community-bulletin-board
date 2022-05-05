module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY HH:MM
        const options = { month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    }
};
