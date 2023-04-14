module.exports = {
  parseCode: (text) => {
    const codeRegex = /```([a-zA-Z]+)?([\s\S]+?)```/g;
    return text.replace(codeRegex, (_, lang, code) => {
      const regex = /`([\s\S]*)`/;
      const match = code.match(regex);
      const finalCode = match[1] ? match[1] : code;
      return finalCode.replaceAll(/\\_/gi, '_');
    });
  }
};