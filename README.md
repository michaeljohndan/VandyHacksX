# Senior Explore

Our submission for VandyHack's 2023 competition.

## Inspiration

It’s only when a loved one experiences an injury or falls into depression that you realize how dependent the elderly are. According to research done by the Department of Internal Medicine of the Chi Mei Medical Center, 20% of residents in the US aged 50 and above have a vitamin D deficiency. A solitary lifestyle is more harmful than belief, with lack of socialization expediting dementia, depression, and loss of a sense of purpose in life. So to receive more vitamin D and prevent muscle atrophy, senior citizens should spend their time out and about.

However, this also severely raises the probability of an injury or a health concern such as a stroke or heart attack, not to mention older adults are often a victim of crime due to their vulnerabilities. 
According to Julius Cheng, a M.D., only 22% of elderly patients are able to function on their own after a fall, an extremely concerning statistic considering the fact that the CDC has estimated 1 out every 4 older adults to experience a fall a year.


## What it does

Our web app provides a solution to this prominent issue amongst the elderly community by providing a way for the elderly to socialize, exercise, and find new hobbies, all with the safety of a member of the community. Our app firstly provides an accessible, easy-to-understand map of nearby activities and potential hobbies catered to the elderly. The app also provides a function that connects the elderly with teenage/adult volunteers who accompany them on their goals for a day. They will be able to guide them through public transportation, help with their physical incapabilities, socialize with them, and offer assistance as they tackle new goals in life. 

## How we built it

Our techstack incorporates Vue.js, Node, Firebase, and Vite to create a web application that allows for user authentication, data collection, and querying through the firestore. Incorporating the Google Maps API, another technology in the Google Cloud Suite, we designed a senior-friendly web interface so that elderly people can view various activities in their area and search for activities based upon the category of their interests such as food, exercise, live events, sightseeing, or outdoor activities. 

## Challenges we ran into

With vue.js being a foreign framework to each of us, we decided to employ this framework as a challenge to expand our technical capabilities. Having a similar component structure to other frameworks, we learned how state variables can be passed between parent and child components and even between two children components.

We also learned the format of a vue.js component with the template tags being the inserted HTML statements and the dynamic variables defined in the export default tag, as well as the unique way in which methods are defined as parameters of the component object.

Lastly, we also learned how to render and emit specific events so that different views show up after certain tasks. Inside each view, there are different templates that will only show if a certain string value evaluates to a key. Using this key, we were able to navigate through views and display our flow of the website. In the future, however, we should utilize the router function implemented within Vue itself, where you can define unique domain paths for each component.

## Accomplishments that we're proud of

We created an app that works!

## What we learned

Data querying, web scraping

## What's next for Senior Explore

Already planning ahead to incorporate an accompanying caretaker feature similar to Carayaya’s services, where we save the email and name of each of the senior citizen users and hope to add a “request accompaniment” feature to the suggested activities of the database.

In addition, we hope to expand upon our incorporation of web scraping to find local places that offer senior discounts in admissions ticket pricing, restaurant discounts, and membership fees.

An app with such an important functionality but lack of users can be widely benefited by connecting with those with a large consumer base



## Authors

* [@michaeljohndan](https://github.com/michaeljohndan)
* [@stanleychiu0314](https://github.com/stanleychiu0314)
* [@echu921](https://github.com/echu921)
* [@stevejj9403](https://github.com/stevejj9403)