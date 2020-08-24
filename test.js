//Test

    const mockEmptyHand = [
        {index: 33, suit: 'D', numbers: {key: '2', value: 2}},
        {index: 8, suit: 'C', numbers: {key: '3', value: 3}},
        {index: 49, suit: 'H', numbers: {key: '5', value: 5}},
        {index: 65, suit: 'H', numbers: {key: '8', value: 8}},
        {index: 72, suit: 'C', numbers: {key: 'A', value: 14}},
    ];

    const mockPoker = [
        {index: 8, suit: 'C', numbers: {key: '3', value: 3}},
        {index: 65, suit: 'H', numbers: {key: '3', value: 3}},
        {index: 72, suit: 'C', numbers: {key: '3', value: 3}},
        {index: 33, suit: 'D', numbers: {key: '3', value: 3}},
        {index: 49, suit: 'H', numbers: {key: '5', value: 5}},
    ];

    const mockDrill = [
        {index: 8, suit: 'C', numbers: {key: '3', value: 3}},
        {index: 65, suit: 'H', numbers: {key: '3', value: 3}},
        {index: 72, suit: 'C', numbers: {key: '3', value: 3}},
        {index: 33, suit: 'D', numbers: {key: '4', value: 4}},
        {index: 49, suit: 'H', numbers: {key: '5', value: 5}},
    ];

    const mockFull = [
        {index: 8, suit: 'C', numbers: {key: '3', value: 3}},
        {index: 65, suit: 'H', numbers: {key: '3', value: 3}},
        {index: 72, suit: 'C', numbers: {key: '3', value: 3}},
        {index: 33, suit: 'D', numbers: {key: '5', value: 5}},
        {index: 49, suit: 'H', numbers: {key: '5', value: 5}},
    ];

    const mockPair = [
        {index: 8, suit: 'C', numbers: {key: '3', value: 3}},
        {index: 65, suit: 'H', numbers: {key: '3', value: 3}},
        {index: 49, suit: 'H', numbers: {key: '5', value: 5}},
        {index: 72, suit: 'C', numbers: {key: '6', value: 6}},
        {index: 33, suit: 'D', numbers: {key: 'J', value: 11}},
    ];

    const mockTwoPair = [
        {index: 8, suit: 'C', numbers: {key: '3', value: 3}},
        {index: 65, suit: 'H', numbers: {key: '3', value: 3}},
        {index: 49, suit: 'H', numbers: {key: '5', value: 5}},
        {index: 72, suit: 'C', numbers: {key: '6', value: 6}},
        {index: 33, suit: 'D', numbers: {key: '6', value: 6}},
    ];

    const mockStraight = [
        {index: 8, suit: 'C', numbers: {key: '3', value: 3}},
        {index: 65, suit: 'H', numbers: {key: '4', value: 4}},
        {index: 49, suit: 'H', numbers: {key: '5', value: 5}},
        {index: 72, suit: 'C', numbers: {key: '6', value: 6}},
        {index: 33, suit: 'D', numbers: {key: '7', value: 7}},
    ];

    const mockStraightLow = [
        {index: 65, suit: 'H', numbers: {key: '2', value: 2}},
        {index: 49, suit: 'H', numbers: {key: '3', value: 3}},
        {index: 72, suit: 'C', numbers: {key: '4', value: 4}},
        {index: 33, suit: 'D', numbers: {key: '5', value: 5}},
        {index: 8, suit: 'C', numbers: {key: 'A', value: 14}},
    ];

    const mockStraightFlush = [
        {index: 8, suit: 'C', numbers: {key: '3', value: 3}},
        {index: 65, suit: 'C', numbers: {key: '4', value: 4}},
        {index: 49, suit: 'C', numbers: {key: '5', value: 5}},
        {index: 72, suit: 'C', numbers: {key: '6', value: 6}},
        {index: 33, suit: 'C', numbers: {key: '7', value: 7}},
    ];

    const mockFlush = [
        {index: 8, suit: 'C', numbers: {key: '3', value: 3}},
        {index: 65, suit: 'C', numbers: {key: '4', value: 4}},
        {index: 49, suit: 'C', numbers: {key: '5', value: 5}},
        {index: 72, suit: 'C', numbers: {key: '6', value: 6}},
        {index: 33, suit: 'C', numbers: {key: '9', value: 9}},
    ];


    const mockRoyalFlush = [
        {index: 8, suit: 'C', numbers: {key: '10', value: 10}},
        {index: 65, suit: 'C', numbers: {key: 'J', value: 11}},
        {index: 49, suit: 'C', numbers: {key: 'Q', value: 12}},
        {index: 72, suit: 'C', numbers: {key: 'K', value: 13}},
        {index: 33, suit: 'C', numbers: {key: 'A', value: 14}},
    ];
