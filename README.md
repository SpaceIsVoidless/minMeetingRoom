# Meeting Rooms Calculator

A JavaScript solution for calculating the minimum number of meeting rooms required to schedule a set of events without overlap. The project includes both a core algorithm implementation and a user-friendly web interface.

## Problem Statement

Given a list of events, where each event has a start and end time, determine the minimum number of rooms needed to hold all events without any time conflicts.

### Input Format
```javascript
events = [
    { start: number, end: number },
    { start: number, end: number },
    ...
]
```

## Implementation Details

### Core Algorithm (`minMeetingRooms.js`)

The solution implements the following features:

1. **Time Complexity**: O(n log n)
   - Achieved through efficient sorting and single-pass processing
   - Sorting events by start time: O(n log n)
   - Processing events: O(n)

2. **Space Complexity**: O(n)
   - Space used for storing sorted events and room assignments
   - No additional data structures needed beyond input size

3. **Key Features**:
   - Handles edge cases (empty input, single event)
   - Returns both minimum room count and room assignments
   - Maintains original event order in output
   - Efficient room reuse strategy

### Web Interface (`index.html`)

A user-friendly interface that:
- Allows input of events in 12-hour AM/PM format
- Provides real-time room calculation
- Displays room assignments with visual feedback
- Supports dynamic addition/removal of events

## Usage

### Web Interface
1. Open `index.html` in a web browser
2. Add events using the "Add Meeting" button
3. Set start and end times for each event
4. Click "Calculate Rooms" to see results

### Programmatic Usage
```javascript
const events = [
    { start: 0, end: 30 },
    { start: 5, end: 10 },
    { start: 15, end: 20 }
];

const result = minMeetingRooms(events);
console.log(`Rooms needed: ${result.rooms}`);
console.log('Room assignments:', result.assignments);
```

## Algorithm Explanation

The solution uses a greedy approach:

1. Sort all events by start time
2. Process events in chronological order
3. For each event:
   - Assign the lowest available room number
   - If no room is available, create a new room
   - Track room availability for future events

## Stretch Goals Achieved

1. ✅ Room Assignment
   - Returns both minimum room count and room assignments
   - Each event is assigned a specific room ID
   - Room IDs are reused when possible

2. ✅ Clean Implementation
   - No external dependencies
   - Well-commented code
   - Efficient data structures

## Testing

The implementation includes test cases covering:
- Empty input
- Single event
- Multiple overlapping events
- Non-overlapping events
- Edge cases with same start/end times

## Browser Support

The web interface works in all modern browsers that support:
- ES6+ JavaScript features
- CSS Grid and Flexbox
- CSS Variables

## Future Improvements

Potential enhancements:
1. Add support for event names/descriptions
2. Implement room capacity constraints
3. Add calendar view visualization
4. Support for recurring events
5. Export/import functionality for event lists

## Files

- `minMeetingRooms.js` — Core algorithm and Node.js test cases
- `index.html` — Frontend for interactive event entry and calculation
- `README.md` — This documentation

## Requirements

- For Node.js: [Node.js](https://nodejs.org/) (v12+ recommended)
- For browser: Any modern web browser

## Installation & Usage

### 1. Node.js (Command Line)

1. **Download or clone the repository** to your local machine.
2. Open a terminal and navigate to the project directory.
3. Run the script:

   ```bash
   node minMeetingRooms.js