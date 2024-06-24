# Event App

This repository contains the code for the Event App, a React Native application that provides details about events and allows users to purchase tickets.


#### Features

1. **EventBottomSheet**:
The `EventBottomSheet` component is a modal bottom sheet that displays detailed information about an event. 

  - **Event Name**: Displays the name of the event.
  - **Host Name**: Displays the name of the event host.
  - **Event Details**: Shows details including:
    - Event Date
    - Duration
    - Location (with a note to join to see the full address)
    - Tickets Left
    - Price Range
  - **About Section**: Describes the event.
  - **Find Section**: Placeholder for a map showing the event location.
  - **Buy Ticket Button**: Button at the bottom that navigates to the "EventQuestionnaire" screen.

  2. **EventQuestionnaire**:
  The `EventQuestionnaire` component is a collecting  information about an event with different questions.
  
  - **Question Steps**: Four steps to collect different information:
      1. Company/Organization
      2. Job Title
      3. Are you a current student?
      4. Where did you hear about this event?
  - **Navigation Buttons**: Buttons to navigate to the next or previous question. The last step shows a "Claim ticket" button.

3. **EventsList**:
The `EventsList` component that displays all eventts in list with host name, event name and event image. 

  - **Event List**: Displays a list of upcoming events with:
  - Event Image
  - Event Name
  - Host Name

    
#### Libraries Used

- `react-native`: For building the UI.
- `@react-navigation/native`: For navigation.
- `@expo/vector-icons`: For icons.
- `expo-linear-gradient`: For gradient background.
- `@gorhom/bottom-sheet`: For bottom sheet.
- `react-native-reanimated`: For animation Buy Button.



### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Riser17/EventTicketApp.git
   ```

2. Navigate to the project directory:
   ```sh
   cd event-app
   ```

3. Install the dependencies:
   ```sh
   npm install   
   ```
4. Run the app:
     - For iOS:
       ```sh
        npx react-native run-ios
       ```
   
    - For Android:
      ```sh
      npx react-native run-android
      ```

### Screenshots

<img width="318" alt="image" src="https://github.com/Riser17/EventTicketApp/assets/91198103/e1ee8c6c-1f6f-49a1-8e18-87cc185f8986">
<img width="318" alt="image" src="https://github.com/Riser17/EventTicketApp/assets/91198103/1ec21031-b2e2-4f3a-b4c1-4908cd07b089">

https://github.com/Riser17/EventTicketApp/assets/91198103/c4293828-7478-417c-868b-3f479ac6e4a7



