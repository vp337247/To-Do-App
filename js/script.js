

$.ajax({
    datatype: 'json',
    url: 'https://jsonplaceholder.typicode.com/todos',
    success: (data) => {

        data.forEach(element => {
            let str = `<li id="${element.id}"><input type="checkbox" id="check${element.id}">${element.title}</li>`;
            $('#toDoList').append(str);
            if (element.completed == true) {
                $(`#check${element.id}`).attr('checked', '').attr('disabled', '');
            }

        });
    }
});

var count = 0;
var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        

        $('#toDoList li input').on('change', (e) => {
            if (e.target.checked == true) {
                count++;
                if (count == 5) {
                    resolve('Congrats. 5 Tasks have been Successfully Completed ');
                }
            }
            else {
                count--;
            }
        })

    }, 1000);



});

promise.then((value) => {
    alert(value);
});
