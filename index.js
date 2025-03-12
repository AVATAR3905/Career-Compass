// <=====================SEARCH=====================>
const searchButton = document.getElementById('search-button');
      searchClose = document.getElementById('search-close');
      searchContent = document.getElementById('search-content');
if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search') 
    })
}
if(searchClose){
    searchClose.addEventListener('click', ()=>{
        searchContent.classList.remove('show-search')
    })
}

// <=====================CATEGORY=====================>
const category = document.getElementById('categorization');
      dropdown = document.getElementById('category')
      category.addEventListener('click', (event) => {
        dropdown.classList.toggle('open-menu');
        event.stopPropagation();
      });
      document.addEventListener('click', () => {
        dropdown.classList.remove('open-menu');
      });
      dropdown.addEventListener('click', (event) => {
        event.stopPropagation();
      });

// <=====================LOGIN FORM=====================>
const loginButton = document.getElementById('login-button')
      loginClose = document.getElementById('login-close')
      loginContent = document.getElementById('login-content')
if(loginButton){
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}
if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}

// <=====================SECTION SCROLL=====================>
document.addEventListener("DOMContentLoaded", () => {
    // Get the elements
    const homeLink = document.getElementById("home-link");
    const featuredLink = document.getElementById("featured-link");
    const homeSection = document.getElementById("home-section");
    const featuredSection = document.getElementById("discount");
    const testimonalsection = document.getElementById("testimonal-section");
    const testimonalLink = document.getElementById("testimonal-link");
    // Scroll to Home
    homeLink.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor behavior
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    // Scroll to Featured
    featuredLink.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor behavior
      featuredSection.scrollIntoView({ behavior: "smooth" });
    });
    testimonalLink.addEventListener("click", (event) => {
        event.preventDefault();
        testimonalsection.scrollIntoView({ behavior: "smooth" })
    })
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');
    const chatMessages = document.getElementById('chatMessages');
    const typingIndicator = document.getElementById('typingIndicator');
    
    // Sample responses for demonstration
    const botResponses = [
      "Based on your interests, you might want to explore careers in software development, data analysis, or UX design.",
      "To advance in your current role, consider taking courses in leadership and project management.",
      "Many companies are looking for candidates with both technical and soft skills like communication and teamwork.",
      "Setting SMART goals - Specific, Measurable, Achievable, Relevant, and Time-bound - can help you track your career progress.",
      "Networking is crucial for career growth. Consider joining professional communities related to your field.",
      "When preparing for an interview, research the company thoroughly and prepare stories that showcase your skills."
    ];
    
    // Function to format current time
    function getCurrentTime() {
      const now = new Date();
      return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    
    // Function to add a new message
    function addMessage(message, isUser = false) {
      const messageElement = document.createElement('div');
      messageElement.className = `chat-message${isUser ? 'user-message' : 'bot-message'}`;
      messageElement.style.animationDelay = '0s';
      
      const messageContent = document.createElement('div');
      messageContent.textContent = message;
      
      const timestamp = document.createElement('span');
      timestamp.className = 'timestamp';
      timestamp.textContent = getCurrentTime();
      
      messageElement.appendChild(messageContent);
      messageElement.appendChild(timestamp);
      
      chatMessages.appendChild(messageElement);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Function to show typing indicator
    function showTypingIndicator() {
      typingIndicator.style.display = 'flex';
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Function to hide typing indicator
    function hideTypingIndicator() {
      typingIndicator.style.display = 'none';
    }
    
    // Function to simulate bot response
    function simulateBotResponse() {
      showTypingIndicator();
      
      // Random response delay between 1-3 seconds
      const responseDelay = Math.floor(Math.random() * 2000) + 1000;
      
      setTimeout(() => {
        hideTypingIndicator();
        
        // Get random response from our sample list
        const randomIndex = Math.floor(Math.random() * botResponses.length);
        addMessage(botResponses[randomIndex]);
      }, responseDelay);
    }
    
    // Handle form submission
    messageForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const message = messageInput.value.trim();
      if (message) {
        // Add user message
        addMessage(message, true);
        
        // Clear input
        messageInput.value = '';
        
        // Simulate bot response
        simulateBotResponse();
      }
    });
    
    // Focus input on page load
    messageInput.focus();
  });

// <!-- IMPORTANT: DO NOT REMOVE THIS SCRIPT TAG OR THIS VERY COMMENT! -->