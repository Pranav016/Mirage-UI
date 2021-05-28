$(document).ready(() => {
	let star = document.getElementsByName('rating');
	let feedback = document.getElementsByName('feedback');
	let submit = $('.feedback-submit');
	var helpful, rating;

	submit.click((e) => {
		e.preventDefault();
		for (let i = 0; i < feedback.length; i++) {
			if (feedback[i].checked) helpful = feedback[i].value;
		}
		for (let i = 0; i < star.length; i++) {
			if (star[i].checked) rating = star[i].value;
		}
		console.log(helpful, rating);
		// $.ajax({
		// 	url: '/feedback',
		// 	data: {
		// 		helpful: helpful,
		// 		rating: rating,
		// 	},
		// 	method: 'POST',
		// 	contentType: 'application/x-www-form-urlencoded',
		// 	success: () => {
		// 		swal({
		// 			title: 'Success!',
		// 			text: 'Thank you for filling the form!',
		// 			icon: 'success',
		// 		});
		// 	},
		// 	error: (err) => {
		// 		swal({
		// 			title: 'Error!',
		// 			text: 'Try again later!',
		// 			icon: 'error',
		// 		});
		// 		console.log(err);
		// 	},
		// });
	});
});
