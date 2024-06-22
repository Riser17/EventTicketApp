# Event App

This repository contains the code for the Event App, a React Native application that provides details about events and allows users to purchase tickets.

## Screens

### Events List
The `EventsList` component that displays all eventts in list with host name, event name and event image. 

### EventBottomSheet
The `EventBottomSheet` component is a modal bottom sheet that displays detailed information about an event. 

### Event Questionnaire
The `EventQuestionnaire` component is a collecting  information about an event with different questions. 


#### Features

1.**EventBottomSheet**
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

  2.**EventQuestionnaire**
- **Question Steps**: Four steps to collect different information:
  1. Company/Organization
  2. Job Title
  3. Are you a current student?
  4. Where did you hear about this event?
- **Navigation Buttons**: Buttons to navigate to the next or previous question. The last step shows a "Claim ticket" button.

3.**EventsList**
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
   git clone https://github.com/Riser17/EventTicketApp/.git
   ```
