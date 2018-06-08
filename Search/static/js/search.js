	arr=[10,11,14,18,21,25,30,36,40,41,46,50,65,68,90,99];
	function draw() {
		canvas=document.getElementById('canvas');
        ctx = this.canvas.getContext("2d");
		
        for (var i = 0; i < arr.length; i++) {
        	drawNode(33+(62*i),40,25,arr[i],ctx);
        }
	}
	function searchIt() {
		var val=document.getElementById('search-field').value;
		var res=binarySearch(val);
		indices=res.traverses,
		count=0,status;

		var intId=setInterval(()=>{
			index=indices.shift();
			if (index > -1) {
				if( index == res.found)
					foundNode(33+(62*index),40,25,arr[index],ctx);
				else
					highlightNode(33+(62*index),40,25,arr[index],ctx);
				var checks=document.getElementById("checkCount");
				checks.innerHTML=""+(++count);
			}
			else{
				status="Found "+val+" at index = "+res.found+" in "+count+" checks.";
				if(res.found==-1){
					status=val+" not found in the array.";

				}
				clearInterval(intId);
				document.getElementById("result").innerHTML=status;
			}
		},2000);
	}
		////////Binary Search Algorithm//////////
        //Copyright 2009 Nicholas C. Zakas. All rights reserved.
		//MIT-Licensed, see source file
		function binarySearch(value){
			items=arr;
		    var startIndex  = 0,
		        stopIndex   = items.length - 1,
		        middle      = Math.floor((stopIndex + startIndex)/2),
		        check_no	= 1,
				list		= [middle];

		    while(items[middle] != value && startIndex < stopIndex){
		        //adjust search area
		        if (value < items[middle]){
		            stopIndex = middle - 1;
		        } else if (value > items[middle]){
		            startIndex = middle + 1;
		        }

		        //recalculate middle
		        middle = Math.floor((stopIndex + startIndex)/2);

		        list.push(middle);

		    	check_no++;
		    }

		    //make sure it's the right value
		    rt=(items[middle] != value) ? -1 : middle;
		    
		    var returnable={
		    	"found" : rt ,
		    	"traverses" : list
		    };

		    return returnable;
		}
		//////// Algorithm Ended //////////
	function drawNode(x,y,r,data,ctx) {
		ctx.fillStyle = "#AAA";
		ctx.beginPath();
		ctx.arc(x,y,r,0,2*Math.PI);
		ctx.fill();
		ctx.font=r*2.5/String(data).length+"px Calibri";
		ctx.fillStyle = "#000";
		ctx.fillText(data,x-(r/1.5),y+(r*0.35));
	}
	function highlightNode(x,y,r,data,ctx) {
		ctx.fillStyle = "#0F0";
		ctx.beginPath();
		ctx.arc(x,y,r,0,2*Math.PI);
		ctx.fill();
		ctx.font=r*2.5/String(data).length+"px Calibri";
		ctx.fillStyle = "#000";
		ctx.fillText(data,x-(r/1.5),y+(r*0.35));
	}
	function foundNode(x,y,r,data,ctx) {
		ctx.fillStyle = "#00F";
		ctx.beginPath();
		ctx.font=r*2.5/String(data).length+"px Calibri";
		ctx.arc(x,y,r,0,2*Math.PI);
		ctx.fill();
		ctx.fillStyle = "#FFF";
		ctx.fillText(data,x-(r/1.5),y+(r*0.35));
	}