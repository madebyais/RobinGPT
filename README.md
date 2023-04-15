# RobinGPT
A Visual Studio Code extension allows you to quickly generate natural language text using the unofficial ChatGPT web wrapper.

## Getting Started

Please make sure that you have latest python and nodejs lts version.

### Server

1. Clone this repo.
2. Open the `server/` folder.
3. Run `make install` to install deps.
4. Open the `server/app.py` file, edit both `session_token` and `conversation_id`, and save it.
5. Run `make` or `python -m flask run` to start the server.

#### Notes

**How to get the session_token?**

1. Open [https://chat.openai.com/](https://chat.openai.com/) using your favourite browser.
2. Right click and click the `inspect` menu.
3. Go to `Storage` tab.
4. Find the `__Secure-next-auth.session-token` key and copy the value.

**How to get the conversation_id?**
1. Open [https://chat.openai.com/](https://chat.openai.com/)
2. Click one of your conversation with ChatGPT
3. Get the uuid from the browser url.

### VSCode Extension

1. Download the latest release from [https://github.com/madebyais/RobinGPT/releases](https://github.com/madebyais/RobinGPT/releases)
2. Open VSCode and install the extension

### How to use it

1. Create your prompt
2. Block the prompt text
3. Press the `ctrl+alt+g`
4. Wait, wait, and DONE!

## Disclaimer

This project is not affiliated with OpenAI in any way. Use at your own risk. I am not responsible for any damage caused by this project. Please read the [OpenAI Terms of Service](https://openai.com/terms) before using this project.