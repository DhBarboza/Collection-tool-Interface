const reader = new FileReader()

function read(input) {
	const csv = input.files[0]
	reader.readAsText(csv)
}

reader.onload = function (e) {
    //document.querySelector('.output').innerText = e.target.result;
    document.querySelector('.class_1').innerText = e.target.result.split("\n")[1].split(",")[1];
    document.querySelector('.class_2').innerText = e.target.result.split("\n")[2].split(",")[1];
    document.querySelector('.class_4').innerText = e.target.result.split("\n")[3].split(",")[1];
    document.querySelector('.class_3').innerText = e.target.result.split("\n")[4].split(",")[1];
    document.querySelector('.class_5').innerText = e.target.result.split("\n")[5].split(",")[1];
    document.querySelector('.class_6').innerText = e.target.result.split("\n")[6].split(",")[1];
    document.querySelector('.class_7').innerText = e.target.result.split("\n")[7].split(",")[1];
    document.querySelector('.class_8').innerText = e.target.result.split("\n")[8].split(",")[1];
    document.querySelector('.class_9').innerText = e.target.result.split("\n")[9].split(",")[1];
    document.querySelector('.class_10').innerText = e.target.result.split("\n")[10].split(",")[1];
    document.querySelector('.class_11').innerText = e.target.result.split("\n")[11].split(",")[1];
    document.querySelector('.class_12').innerText = e.target.result.split("\n")[12].split(",")[1];
    document.querySelector('.class_13').innerText = e.target.result.split("\n")[13].split(",")[1];
    document.querySelector('.class_14').innerText = e.target.result.split("\n")[14].split(",")[1];
    document.querySelector('.class_15').innerText = e.target.result.split("\n")[15].split(",")[1];
    document.querySelector('.class_16').innerText = e.target.result.split("\n")[16].split(",")[1];
    document.querySelector('.class_17').innerText = e.target.result.split("\n")[17].split(",")[1];
    document.querySelector('.class_18').innerText = e.target.result.split("\n")[18].split(",")[1];
    document.querySelector('.class_19').innerText = e.target.result.split("\n")[19].split(",")[1];
    document.querySelector('.class_20').innerText = e.target.result.split("\n")[20].split(",")[1];
    document.querySelector('.class_21').innerText = e.target.result.split("\n")[21].split(",")[1];

    document.querySelector('.class_1').style.background = e.target.result.split("\n")[1].split(",")[2];
    document.querySelector('.class_2').style.background = e.target.result.split("\n")[2].split(",")[2];
    document.querySelector('.class_3').style.background = e.target.result.split("\n")[3].split(",")[2];
    document.querySelector('.class_4').style.background = e.target.result.split("\n")[4].split(",")[2];
    document.querySelector('.class_5').style.background = e.target.result.split("\n")[5].split(",")[2];
    document.querySelector('.class_6').style.background = e.target.result.split("\n")[6].split(",")[2];
    document.querySelector('.class_7').style.background = e.target.result.split("\n")[7].split(",")[2];
    document.querySelector('.class_8').style.background = e.target.result.split("\n")[8].split(",")[2];
    document.querySelector('.class_9').style.background = e.target.result.split("\n")[9].split(",")[2];
    document.querySelector('.class_10').style.background = e.target.result.split("\n")[10].split(",")[2];
    document.querySelector('.class_11').style.background = e.target.result.split("\n")[11].split(",")[2];
    document.querySelector('.class_12').style.background = e.target.result.split("\n")[12].split(",")[2];
    document.querySelector('.class_13').style.background = e.target.result.split("\n")[13].split(",")[2];
    document.querySelector('.class_14').style.background = e.target.result.split("\n")[14].split(",")[2];
    document.querySelector('.class_15').style.background = e.target.result.split("\n")[15].split(",")[2];
    document.querySelector('.class_16').style.background = e.target.result.split("\n")[16].split(",")[2];
    document.querySelector('.class_17').style.background = e.target.result.split("\n")[17].split(",")[2];
    document.querySelector('.class_18').style.background = e.target.result.split("\n")[18].split(",")[2];
    document.querySelector('.class_19').style.background = e.target.result.split("\n")[19].split(",")[2];
    document.querySelector('.class_20').style.background = e.target.result.split("\n")[20].split(",")[2];
    document.querySelector('.class_21').style.background = e.target.result.split("\n")[21].split(",")[2];
}
