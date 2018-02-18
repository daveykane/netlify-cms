const path = require( `path` );

exports.createPages = ( { graphql, boundActionCreators } ) => {
    return new Promise( ( resolve, reject ) => {
        graphql( `
        {
          allMarkdownRemark( sort: { order: DESC, fields: [frontmatter___date] }, limit: 100) {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }
      ` ).then( ( result ) => {
            if( result.errors ) {
                return Promise.reject( result.errors );
            }

            const { createPage } = boundActionCreators;

            result.data.allMarkdownRemark.edges.forEach( ( { node } ) => {
                createPage( {
                    path: node.frontmatter.path,
                    component: path.resolve( `./src/templates/blog-post.js` ),
                    context: {}
                } );
            } );
            resolve();
        } )
    } );
};