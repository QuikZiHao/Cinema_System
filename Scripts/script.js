var Amount = 0;
var selected_Seat = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
var seat_str = 'None';

function seatFunction(seat_no){
    
    var seat_row = parseInt((seat_no-1)/5);
    var seat_col = (seat_no-1)%5;
    if(selected_Seat[seat_row][seat_col] == 0){
        selected_Seat[seat_row][seat_col] = 1;
        Amount += 20;
        document.getElementById(String(seat_no)).classList.replace('unselected','selected');
    }

    else{
        selected_Seat[seat_row][seat_col] = 0;
        Amount -= 20;
        document.getElementById(String(seat_no)).classList.replace('selected','unselected');
    }
    console.log(selected_Seat);

    seat_str = '';
    for(row=0;row<selected_Seat.length;row++)
        for(col=0;col<selected_Seat[0].length;col++){
            if(selected_Seat[row][col]==1){
                seat_str += String(row*5+col+1);
                seat_str += '; ';
            }
    }
    if(seat_str == ''){
        seat_str = 'None';
    }

    document.getElementById('total-amount').innerHTML = '$' + Amount;
    document.getElementById('chosen-seat').innerHTML = seat_str;
}
function CreateMatrix(){
    seat_Matrix = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0]];
    return seat_Matrix;
}

function showTimeFunction(){
    selected_Seat = CreateMatrix();
    document.getElementById('total-amount').innerHTML = 0;
    Amount = 0;
    document.getElementById('chosen-seat').innerHTML = 'None';
    console.log('123');
    var id=1;
    var content = '';
    for(row=0;row<selected_Seat.length;row++){
        content += '<tr>';
        for(col=0;col<selected_Seat[0].length;col++){
            content += `
            <td class="small-padding align-items-center margin-bottom">
            <button onclick="seatFunction(${id})" class="seat unselected" id='${id}'">${id}</button>
          </td>
          `;
          id+=1
        }
        content += '</tr>';
    }

    document.getElementById('seat-table').innerHTML = content;
}