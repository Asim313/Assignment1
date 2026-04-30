# Hotel Booking Website Report

## Introduction
This project is a frontend hotel booking website developed as a university assignment. The main goal was to create a clean and responsive interface using only XHTML, CSS, and JavaScript. The website allows users to explore categories, view room details, and calculate reservation costs based on the number of nights. This project helped me improve my understanding of page structure, styling, and client-side validation.

## Body
### 1) Development Process
I built the project in three connected pages. First, `index.html` serves as the homepage with the website title, logo, vision and mission, developer profile (Asim ), navigation links, and a contact section with email, phone, and a simple form.  
Second, `categories.html` presents five required categories: Luxury Hotels, Business Hotels, Family Hotels, Budget Hotels, and Beach Resorts. I used modern cards with hover effects, and each card links to `rooms.html`.  
Third, `rooms.html` displays three room options with real photos, descriptions, features, and per-night prices. In `script.js`, I added the reservation formula:  
**total = price x nights**.  
The script validates input and rejects empty, zero, or negative values with user-friendly messages.  
Because this is a static frontend project, there is no backend storage or live booking submission.

### 2) Competitor Analysis

| Platform | Advantages (2) | Disadvantages (2) | Comparison with My Website |
|---|---|---|---|
| Booking.com | Large hotel database, trusted reviews and filters | Interface can feel crowded, many paid promotions affect ranking | My site is simpler and easier to understand, but has far fewer listings and no real review system |
| Airbnb | Unique home stays, strong host-guest communication model | Quality can vary by host, service and cleaning fees may be high | My site is more basic and focused on hotels, but lacks account features and host interaction tools |

### 3) Future Improvements
To make this project closer to real systems, I plan to add:  
1. Online payment integration for secure checkout.  
2. User login/signup for tracking booking history.  
3. Real-time booking status for live room availability.

## Conclusion
In conclusion, this project effectively demonstrates a complete static hotel booking website with category browsing, room presentation, and dynamic cost calculation. The assignment improved my skills in frontend layout planning, responsive design, and JavaScript validation. I also learned the difference between static prototypes and full production booking systems, which motivates future backend integration.

## References
- https://www.booking.com  
- https://www.airbnb.com  

