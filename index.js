const express = require ("express");
const bodyParser = require ("body-parser");
const cors = require ("cors");

// const {Configuration, OpenAiApi } = require ("openai");            openai is the api key location of the application

const config = new Configuration ({
    apiKey: "#",
});



        function sendMessage() {
            const userInput = document.getElementById('user-input');
            const chatMessages = document.getElementById('chat-messages');

            if (userInput.value.trim() !== '') {
                // Add user message
                const userMessage = document.createElement('div');
                userMessage.className = 'message user-message';
                userMessage.textContent = userInput.value;
                chatMessages.appendChild(userMessage);

                // Clear input
                userInput.value = '';

                // Simulate bot response (you'd replace this with actual chatbot logic)
                setTimeout(() => {
                    const botMessage = document.createElement('div');
                    botMessage.className = 'message bot-message';
                    botMessage.textContent = "This is my default message response, please add your openai API key to the code to receive more AI specific responses.";
                    chatMessages.appendChild(botMessage);

                    // Scroll to bottom
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 1000);

                // Scroll to bottom
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        }

        // Allow sending message with Enter key
        document.getElementById('user-input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

