function minMeetingRooms(events) {
    // Edge cases
    if (!events || events.length === 0) return { rooms: 0, assignments: [] };
    if (events.length === 1) return { rooms: 1, assignments: [{ ...events[0], roomId: 1 }] };

    // Create a copy of events with indices to track original positions
    const eventsWithIndices = events.map((event, index) => ({ ...event, originalIndex: index }));
    
    // Sort events by start time
    eventsWithIndices.sort((a, b) => a.start - b.start);

    // Track room assignments
    const assignments = new Array(events.length);
    const availableRooms = [];
    let nextRoomId = 1;

    // Process each event
    for (const event of eventsWithIndices) {
        // Find an available room
        let roomId;
        if (availableRooms.length > 0) {
            roomId = availableRooms.shift();
        } else {
            roomId = nextRoomId++;
        }

        // Assign the room to this event
        assignments[event.originalIndex] = {
            ...event,
            roomId: roomId
        };

        // Find the next event that ends before this one
        const nextEvent = eventsWithIndices.find(e => 
            e.start > event.start && e.start >= event.end
        );

        if (nextEvent) {
            availableRooms.push(roomId);
        }
    }

    return {
        rooms: nextRoomId - 1,
        assignments: assignments
    };
}

// Test cases
const testCases = [
    [
        { start: 0, end: 30 },
        { start: 5, end: 10 },
        { start: 15, end: 20 }
    ],
    [
        { start: 7, end: 10 },
        { start: 2, end: 4 }
    ],
    [
        { start: 1, end: 5 },
        { start: 2, end: 3 },
        { start: 3, end: 6 }
    ]
];

testCases.forEach((test, index) => {
    const result = minMeetingRooms(test);
    console.log(`Test case ${index + 1}: ${result.rooms} rooms needed`);
    console.log('Room assignments:', result.assignments);
});