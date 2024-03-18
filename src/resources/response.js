module.exports.apiResponse = (status, messageCode, content = "") => {
  return {
    status: status,
    messageCode: messageCode,
    content: content,
  };
};
