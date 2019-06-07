/**
 * @param {*} err Triggered error
 * @param {*} info Info message
 */
const logErrorToMyService = (err, info) => {
  // eslint-disable-next-line no-console
  console.log(`ERROR SERVICE NOTIFIED: ${err}: ${info}`);
};

export default logErrorToMyService;
