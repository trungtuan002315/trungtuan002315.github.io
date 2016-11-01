$(document).ready(function()
{
	//check form
	// get data from form
	$('#form_register').submit(function(){
		// get value from form
		var username = $('#username').val();
		var password = $('#password').val();
		var email = $('#email').val();
		var brithday = $('#output').val();
		var flag = true;
		
		// validate user
		if (username == '' || username.length < 8) {
			$('#error_name').text("Tên đăng nhập phải lớn hơn 8 ký tự");
			flag = false;
		} else {
			$('#error_name').text('');
		}

		if (password == '' || password.length < 8) {
			$('#error_pass').text('Password phải lớn hơn 8 ký tự');
			flag = false;
		} else {
			$('#error_pass').text('');
		}	
		if (!isEmail(email)) {
			$('#error_email').text('Email không được để trống và phải đúng định dạng');
            flag = false;
		} else{
            $('#error_email').text('');
        }
        return flag;

	});

	//check email
	function isEmail(emailStr)
	{
        var emailPat=/^(.+)@(.+)$/
        var specialChars="\\(\\)<>@,;:\\\\\\\"\\.\\[\\]"
        var validChars="\[^\\s" + specialChars + "\]"
        var quotedUser="(\"[^\"]*\")"
        var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/
        var atom=validChars + '+'
        var word="(" + atom + "|" + quotedUser + ")"
        var userPat=new RegExp("^" + word + "(\\." + word + ")*$")
        var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$")
        var matchArray=emailStr.match(emailPat)
        if (matchArray==null) {
                return false
        }
        var user=matchArray[1]
        var domain=matchArray[2]
 
        // See if "user" is valid
        if (user.match(userPat)==null) {
            return false
        }
        var IPArray=domain.match(ipDomainPat)
        if (IPArray!=null) {
            // this is an IP address
                  for (var i=1;i<=4;i++) {
                    if (IPArray[i]>255) {
                        return false
                    }
            }
            return true
        }
        var domainArray=domain.match(domainPat)
        if (domainArray==null) {
            return false
        }
 
        var atomPat=new RegExp(atom,"g")
        var domArr=domain.match(atomPat)
        var len=domArr.length
 
        if (domArr[domArr.length-1].length<2 ||
            domArr[domArr.length-1].length>3) {
           return false
        }
 
        if (len<2)
        {
           return false
        }
        return true;
    }    

    // get today
    var today = new Date();
    var nowYear = today.getFullYear();
    var nowMonth = today.getMonth();
    var nowDate = today.getDate();
    
    // month seleted option
    var monthSelected = 0;
    
    // year seleted option 
    var yearSelected = 0; 
    
    // show calender
    $('#img_date').click(function() {
        $('#calender').toggle();
    });

    
    // display list option year
    $('#list-year').append(function() {
        var listYear = "";
        for (var i = (nowYear - 300); i <= (nowYear + 100); i++) {
            if (i == nowYear) {
                listYear += '<option selected>'
                        + i + '</option>';
            } else {
                listYear += '<option>' + i
                        + '</option>';
            }
        }
        return listYear;
    });
    
    // display list option month
    $('#list-month').append(function() {
        var listMonth = "";
        for (var i = 0; i <= 11; i++) {
            if (i == nowMonth) {
                listMonth += '<option selected>'
                        + changeMonth(i) + '</option>';
            } else {
                listMonth += '<option>'
                        + changeMonth(i) + '</option>';
            }
        }
        return listMonth;
    });

    showDate();

    function showDate() {
        var idDate = "";
        yearSelected = Number($('#list-year > option:selected').text());
        monthSelected = $('#list-month > option:selected').index();
        var dateCurrent = new Date(changeMonth(monthSelected)   + " 1, " + (yearSelected));
        var dayCurrent = dateCurrent.getDay();
        var date = 1;
        for (var i = 0; i < 42; i++) {
            idDate = "#calender td:eq(" + i + ")";
            // xac dinh ngay bat dau va ngay ket thuc
            if ((i >= dayCurrent) && (date <= sumDateOfMonth(monthSelected,yearSelected))) {
                // xac dinh ngay hien tai
                if (date == nowDate && monthSelected == nowMonth && (yearSelected) == nowYear) {
                    $(idDate).attr('class', 'today');
                } else {
                    $(idDate).attr('class', 'day');
                }
                $(idDate).text(date);
                date++;
            } else {
                $(idDate).attr('class', 'not-day');
                $(idDate).text("");
            }
        }
    }

    $('#list-month').click(function() { // choose month --> change date 
        showDate();
    });
    $('#list-year').click(function() {  // choose year --> change date
        showDate();
    });

    // click next year
    $('#next_year').click(function() { 
        try {
            yearSelected = Number($('#list-year > option:selected').text());
            if (yearSelected >= (nowYear + 100)) {
                throw "number of year too big!"
            } else {
                // add attribute selected to option
                // element of year next
                $('#list-year > option:selected').prop("selected", false).next().prop("selected", true);
                showDate();
            }
        } catch (err) {
            alert(err);
        }
    });

    // click previous year
    $('#pre_year').click(function() {
        yearSelected = Number($('#list-year > option:selected').text());
        try {
            if (yearSelected <= (nowYear - 300)) {
                throw "number of year too small!";
            } else {
                // add attribute selected to
                // option element of year next
                $('#list-year > option:selected').prop("selected", false).prev().prop("selected",true);
                showDate();
            }
        } catch (err) {
            alert(err);
        }
    });

    // click next month
    $('#next_month').click(function() {
                        monthSelected = $('#list-month > option:selected').index();
                        yearSelected = Number($('#list-year > option:selected').text());
                        try {
                            // if december next january
                            if (monthSelected == 11) {
                                if (yearSelected < (nowYear + 100)) {
                                    $('#list-month > option:selected').prop("selected",false);
                                    $('#list-month > option:eq(1)').prev().prop("selected",true);
                                    $('#list-year > option:selected').prop("selected",false).next().prop("selected",true);
                                    showDate();
                                } else {
                                    throw "number of year too big!"
                                }
                            } else {
                                $('#list-month > option:selected').prop("selected", false).next().prop("selected",true);
                                showDate();
                            }
                        } catch (err) {
                            alert(err);
                        }
                    });

    // click previous month
    $('#pre_month').click(function() {
        monthSelected = $('#list-month > option:selected').index();
        yearSelected = Number($('#list-year > option:selected').text());
        try {
            // if january previous december
            if (monthSelected == 0) {
                if (yearSelected > (nowYear - 300)) {
                    $('#list-month > option:selected').prop("selected",false);
                    $('#list-month > option:eq(10)').next().prop("selected",true);
                    $('#list-year > option:selected').prop("selected",false).prev().prop("selected",true);
                    showDate();
                } else {
                    throw "number of year too small!"
                }
            } else {
                $('#list-month > option:selected').prop("selected", false).prev().prop("selected",true);
                showDate();
            }
        } catch (err) {
            alert(err);
        }
    });

    // input date
    var dateChosen = "";
    for (var i = 0; i < 42; i++) {
        dateChosen = '#calender td:eq(' + i + ')';
        chooseDate(dateChosen);
    }

    // click date add <input>
    function chooseDate(dateChosen) {
        $(dateChosen).click(function() {
            if ($(dateChosen).text() != "") {
                monthSelected = $('#list-month > option:selected').index();
                yearSelected = Number($('#list-year > option:selected').text());
                var dateSelected = $(dateChosen).text() + "/" + (monthSelected + 1) + "/" + yearSelected;
                $('#in-date').val(dateSelected);
            }
        });
    }

    function checkLeadYear(year) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            } else {
                return false;
            }
        } else if (year % 4 == 0) {
            return true;
        } else {
            return false;
        }
    }

    function sumDateOfMonth(month, year) {
        switch (month) {
        case 1:
            if (checkLeadYear(year)) {
                return 29;
            } else {
                return 28;
            }
        case 3:
            return 30;
        case 5:
            return 30;
        case 8:
            return 30;
        case 10:
            return 30;
        default:
            return 31;
        }
    }

    // change month num --> text
    function changeMonth(num) {
        switch (num) {
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        default:
            return "December";
        }
    }


	


});
