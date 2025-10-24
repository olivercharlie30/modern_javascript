
const d = new Date(2025, 3, 18, 8, 50, 0);
const month = d.getMonth();
const hour = d.getHours();


switch (month) {
    case 1:
        console.log(`It's January`);
        break;
     case 2:
        console.log(`It's February`);
        break;
     case 3:
        console.log(`It's March`);
        break;
    default:
        console.log(`It's not Jan, Feb or Match`);
}



switch (true) {
    case hour < 12:
        console.log(`Good Morning`);
        break;
    case hour < 18:
        console.log(`Good Afternoon`);
        break;
    default:
        console.log(`Good Night`);
}