module.exports = {
    plugins: [
        "gatsby-plugin-netlify-cms",
        "gatsby-transformer-remark",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "blog",
                path: `${__dirname}/blog/`
            }
        }
    ]
};