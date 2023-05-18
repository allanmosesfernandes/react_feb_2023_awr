const prerender = require("prerender-node");
const { Helmet } = require("react-helmet");

prerender.set("prerenderToken", "kQgZqPDwN83niqsFkLH9");

exports.handler = async (event, context) => {
  // Retrieve the requested URL from the event
  const url = event.path;

  // Create a new Helmet instance to store the metadata
  const helmet = Helmet.renderStatic();

  // Generate the metadata by executing your React Helmet code
  // Here, you can call your API to fetch the necessary data and update the Helmet instance

  // Return the prerendered HTML with the metadata
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: `
      <!DOCTYPE html>
      <html ${helmet.htmlAttributes.toString()}>
        <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
        </head>
        <body>
          <div id="root">Loading...</div>
          <script src="/path/to/your/react-app.js"></script>
        </body>
      </html>
    `,
  };
};
