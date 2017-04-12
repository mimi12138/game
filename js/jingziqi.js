window.onload=function(){
	var aA=document.getElementsByTagName('a');
	for(var i=0; i<aA.length; i++){
		aA[i].onmouseover=function(){
		startMove(this,{width:180});
		}
		aA[i].onmouseout=function(){
		startMove(this,{width:150});
		}
	}
	var div=document.getElementsByName("odiv");
	for(var i=0;i<div.length;i++)
	{
	div[i].onmouseover=function(){
	startMove(this,{opacity:100});
	}
      div[i].onmouseout=function(){
    startMove(this,{opacity:70});
	}
	}
	}
var count=1;
	var xcount=0;
	var ocount=0;
	var flag=0;
	var myarr=new Array();
function fun1(obj)
	{
	var m=obj.childNodes;
		if(count==1||count==3||count==5||count==7||count==9)
		{
			if(m[1].style.display!="inline")
			{
				m[0].style.display="inline";
		        myarr[xcount]=obj.id+"x";
		        xcount=xcount+1;
				count=count+1;
			}		 
		}	
	else 
	{
		if(m[0].style.display!="inline")
		{
			m[1].style.display="inline";
	        myarr[xcount]=obj.id+"o";
	        xcount=xcount+1;	
            count=count+1;			
		}
	}
	if(count>=6)
	{
	checkx(count,myarr);
	checko(count,myarr);
	}
    if(count==10&&flag==0)
	{
		 alert("啊哈和局~势均力敌啊！");
	     history.go(0);   
	}
	}
	function checkx(obj,myarr)
	{
	for(var i=0;i<myarr.length;i++)
	{
		if(myarr[i]=="d1x")
		  {
			 for(var j=0;j<obj;j++)
				 { 
					if(myarr[j]=="d2x")
					   {
						  for(var z=0;z<obj;z++)
							 {
								 if(myarr[z]=="d3x")
							   {
								  alert("哇哦~玩家X使出了洪荒之力，赢了耶！");
								  flag=1;
								  history.go(0);
							   }
							}
						}
					else if(myarr[j]=="d4x")
					{     
					      for(var z=0;z<obj;z++)
							 {
								 if(myarr[z]=="d7x")
							   {
								  alert("哇哦~玩家X使出了洪荒之力，赢了耶！");
								   flag=1;
								  history.go(0);
							   }
							}
					}
					else if(myarr[j]=="d5x")
					{     
					      for(var z=0;z<obj;z++)
							 {
								 if(myarr[z]=="d9x")
							   {
								  alert("哇哦~玩家X使出了洪荒之力，赢了耶！");
								   flag=1;
								  history.go(0);
							   }
							}
					}
				  }
		   }
		   else if(myarr[i]=="d3x")
		  {
			 for(var j=0;j<obj;j++)
				 { 
					if(myarr[j]=="d6x")
					   {
						  for(var z=0;z<obj;z++)
							 {
								 if(myarr[z]=="d9x")
							   {
								  alert("哇哦~玩家X使出了洪荒之力，赢了耶！");
								   flag=1;
								  history.go(0);
							   }
							}
						}
					else if(myarr[j]=="d5x")
					{
						  for(var z=0;z<obj;z++)
							 {
								 if(myarr[z]=="d7x")
							   {
								  alert("哇哦~玩家X使出了洪荒之力，赢了耶！");
								   flag=1;
								  history.go(0);
							   }
							}				
					}					
				  }
		   }
		   else if(myarr[i]=="d5x")
		  {
			 for(var j=0;j<obj;j++)
				 { 
					if(myarr[j]=="d2x")
					   {
						  for(var z=0;z<obj;z++)
							 {
								 if(myarr[z]=="d8x")
							   {
								  alert("哇哦~玩家X使出了洪荒之力，赢了耶！");
								   flag=1;
								  history.go(0);
							   }
							}
						}
					else if(myarr[j]=="d4x")
					    {
						  for(var z=0;z<obj;z++)
							 {
								 if(myarr[z]=="d6x")
							   {
								  alert("哇哦~玩家X使出了洪荒之力，赢了耶！");
								   flag=1;
								  history.go(0);
							   }
							}
						}  
				  }
		   }
		   else if(myarr[i]=="d7x")
		  {
			 for(var j=0;j<obj;j++)
				 { 
					if(myarr[j]=="d8x")
					   {
						  for(var z=0;z<obj;z++)
							 {
								 if(myarr[z]=="d9x")
							   {
								  alert("哇哦~玩家X使出了洪荒之力，赢了耶！");
								   flag=1;
								  history.go(0);
							   }
							}
						}
				  }
		   }
	 
	}
	}
	function checko(obj,myarr)
	{
	for(var i=0;i<myarr.length;i++)
	{
		if(myarr[i]=="d1o")
		  {
			 for(var j=0;j<obj;j++)
				 { 
					if(myarr[j]=="d2o")
					   {
						  for(var z=0;z<obj;z++)
							 {
								 if(myarr[z]=="d3o")
							   {
								  alert("嗯哼~玩家O真是超级棒！给你个赞！！");
								   flag=1;
								  history.go(0);
							   }
							}
						}
					else if(myarr[j]=="d4o")
					{     
					      for(var z=0;z<obj;z++)
							 {
								 if(myarr[z]=="d7o")
							   {
								  alert("嗯哼~玩家O真是超级棒！给你个赞！");
								   flag=1;
								  history.go(0);  
							   }
							}
					}
					else if(myarr[j]=="d5o")
					{     
					      for(var z=0;z<obj;z++)
							 {
								 if(myarr[z]=="d9o")
							   {
								  alert("嗯哼~玩家O真是超级棒！给你个赞！");
								   flag=1;
								  history.go(0);
							   }
							}
					}
				  }
		   }
		   else if(myarr[i]=="d3o")
		  {
			 for(var j=0;j<obj;j++)
				 { 
					if(myarr[j]=="d6o")
					   {
						  for(var z=0;z<obj;z++)
							 {
								 if(myarr[z]=="d9o")
							   {
								  alert("嗯哼~玩家O真是超级棒！给你个赞！");
								   flag=1;
								  history.go(0);
							   }
							}
						}
					else if(myarr[j]=="d5o")
					{
						  for(var z=0;z<obj;z++)
							 {
								 if(myarr[z]=="d7o")
							   {
								  alert("嗯哼~玩家O真是超级棒！给你个赞！！");
								   flag=1;
								  history.go(0);
							   }
							}				
					}					
				  }
		   }
		   else if(myarr[i]=="d5o")
		  {
			 for(var j=0;j<obj;j++)
				 { 
					if(myarr[j]=="d2o")
					   {
						  for(var z=0;z<obj;z++)
							 {
								 if(myarr[z]=="d8o")
							   {
								  alert("嗯哼~玩家O真是超级棒！给你个赞！");
								   flag=1;
								  history.go(0);
							   }
							}
						}
					else if(myarr[j]=="d4o")
					    {
						  for(var z=0;z<obj;z++)
							 {
								 if(myarr[z]=="d6o")
							   {
								  alert("嗯哼~玩家O真是超级棒！给你个赞！");
								   flag=1;
								  history.go(0);
							   }
							}
						}  
				  }
		   }
		   else if(myarr[i]=="d7o")
		  {
			 for(var j=0;j<obj;j++)
				 { 
					if(myarr[j]=="d8o")
					   {
						  for(var z=0;z<obj;z++)
							 {
								 if(myarr[z]=="d9o")
							   {
								  alert("嗯哼~玩家O真是超级棒！给你个赞！");
								   flag=1;
								  history.go(0);
							   }
							}
						}
				  }
		   }
	}
	}