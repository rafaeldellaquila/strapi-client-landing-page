module.export = ({ env }) => ({
  netlifyWebhook: env("NETFLIFY_WEBHOOK"),
});
