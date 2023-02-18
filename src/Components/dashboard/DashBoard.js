import React from "react";
import "./dashBoard.css";
import newTicket from "./images/newTicket.png";

import openTicket from "./images/openTicket.png";
import pendingTicket from "./images/pendingTickets.png";
import resolvedTicket from "./images/resolvedTicket.png";
import expiredTicket from "./images/expiredTicket.png";
import chart from "./images/chart.jpeg"
import cartoon from "./images/cartoon.png"
import card1 from "./images/card1.jpg"
import card2 from "./images/card2.jpg"
import card3 from "./images/card3.jpg"

import { faEnvelope, faEnvelopeOpen, faCircleCheck, faTriangleExclamation , faTicketSimple} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const DashBoard = () => {
  return (
    < div className="container-fluid">





     {/* 1st row */}
     <div className="row  my-5  px-1 border rounded">

     <div className="col-md-6 my-1">
      <div className="row">
         <div className="col-4   ">
            <div className="row">
              <div className="col-4  text-center p-0">
              <div className="IconBG p-1 mt-1">
                  {/* <img className="img-fluid" src={newTicket} alt="" /> */}
                  <FontAwesomeIcon  className="iconSizeMessage" icon={faEnvelope} />
                </div>
              </div>

                <div className="col-8  p-0">
                <p className=" m-0">New ticket</p>
                <p className="m-0">34</p>
                </div>
                
            </div>
          </div>
          <div className="col-4   ">
            <div className="row">
              <div className="col-4  text-center p-0">
              <div className="IconBG p-1 mt-1">
                  {/* <img className="img-fluid" src={newTicket} alt="" /> */}
                  <FontAwesomeIcon  className="iconSizeMessage" icon={faEnvelope} />
                </div>
              </div>

                <div className="col-8  p-0">
                <p className=" m-0">New ticket</p>
                <p className="m-0">34</p>
                </div>
                
            </div>
          </div>
          
           <div className="col-4   ">
            <div className="row">
              <div className="col-4  text-center p-0">
              <div className="IconBG p-1 mt-1">
                  {/* <img className="img-fluid" src={newTicket} alt="" /> */}
                  <FontAwesomeIcon  className="iconSizeMessage" icon={faEnvelope} />
                </div>
              </div>

                <div className="col-8  p-0">
                <p className=" m-0">New ticket</p>
                <p className="m-0">34</p>
                </div>
                
            </div>
          </div>
     </div>
     </div>
     <div className="col-md-6 my-1">
      <div className="row">
         <div className="col-4   ">
            <div className="row">
              <div className="col-4  text-center p-0">
              <div className="IconBG p-1 mt-1">
                  {/* <img className="img-fluid" src={newTicket} alt="" /> */}
                  <FontAwesomeIcon  className="iconSizeMessage" icon={faEnvelope} />
                </div>
              </div>

                <div className="col-8  p-0">
                <p className=" m-0">New ticket</p>
                <p className="m-0">34</p>
                </div>
                
            </div>
          </div>
          <div className="col-4   ">
            <div className="row">
              <div className="col-4  text-center p-0">
              <div className="IconBG p-1 mt-1">
                  {/* <img className="img-fluid" src={newTicket} alt="" /> */}
                  <FontAwesomeIcon  className="iconSizeMessage" icon={faEnvelope} />
                </div>
              </div>

                <div className="col-8  p-0">
                <p className=" m-0">New ticket</p>
                <p className="m-0">34</p>
                </div>
                
            </div>
          </div>
          
           <div className="col-4   ">
            <div className="row">
              <div className="col-4  text-center p-0">
              <div className="IconBG p-1 mt-1">
                  {/* <img className="img-fluid" src={newTicket} alt="" /> */}
                  <FontAwesomeIcon  className="iconSizeMessage" icon={faEnvelope} />
                </div>
              </div>

                <div className="col-8  p-0">
                <p className=" m-0">New ticket</p>
                <p className="m-0">34</p>
                </div>
                
            </div>
          </div>
     </div>
     </div>
        
         
      
        
        </div>
      {/* 1st row */}




      <div className="container px-3">
    
      {/* 2nd row */}

        <div className="row justify-content-between">
            {/* chart */}
            <div className="col-md-6 my-2 p-0">

<div className="card">
  <div className="card-header">
    Ticket Status
  </div>
  <div className="card-body secondRowCard">
 <img className="img-fluid" src={chart} alt="" />
  </div>
</div>

                
            </div>
            {/* chart */}

            {/* chat */}
            <div className="col-md-5 my-2 p-0 ">
            <div className="card ">
  <div className="card-header">
    Top Agent's <span className="text-primary">by chats</span>
  </div>
  <div className="card-body secondRowCard">
    <div className="row my-3 chatRow">
        <div className="col-2 ">
            <div className="profileImage">
        <img className="img-fluid" src={cartoon} alt="" />
    </div>
    </div>
        <div className="col-7 p-0">
            <div className="profileName ">
            <p className="m-0">Babar Azam</p>
            <p className="message-text m-0">Lorem ipsujm klndwk;s m khjbd dolor sit amet </p>
            </div>
        </div>
        <div className="col-3  p-0">
            <p className="mt-2 totalMessages">10 chats</p>
        </div>
   

    </div>
    <div className="row my-3 chatRow">
        <div className="col-2 ">
            <div className="profileImage">
        <img className="img-fluid" src={cartoon} alt="" />
    </div>
    </div>
        <div className="col-7 p-0">
            <div className="profileName ">
            <p className="m-0">Babar Azam</p>
            <p className="message-text m-0">Lorem ipsujm klndwk;s m khjbd dolor sit amet </p>
            </div>
        </div>
        <div className="col-3  p-0">
            <p className="mt-2 totalMessages">10 chats</p>
        </div>
   

    </div>

    <div className="row mt-3 chatRow">
        <div className="col-2 ">
            <div className="profileImage">
        <img className="img-fluid" src={cartoon} alt="" />
    </div>
    </div>
        <div className="col-7 p-0">
            <div className="profileName ">
            <p className="m-0">Babar Azam</p>
            <p className="message-text m-0">Lorem ipsujm klndwk;s m khjbd dolor sit amet </p>
            </div>
        </div>
        <div className="col-3  p-0">
            <p className="mt-2 totalMessages">10 chats</p>
        </div>
   
    </div>
    
  </div>
            </div>
            </div>
            {/* chat */}


        </div>
      {/* 2nd row */}


      {/* 3rd Row */}
      <div className="row justify-content-around my-2">
        <div className="col-md-3 mt-2 ">
        <div className="card shadow">
 
  <div className="card-body">
  <img className="img-fluid" src={card1} alt="" /></div>
</div>
        </div>

        <div className="col-md-3 mt-2">
        <div className="card shadow">
 
  <div className="card-body">
  <img className="img-fluid" src={card2} alt="" /></div>
</div>
        </div>

        <div className="col-md-3 mt-2 ">
        <div className="card shadow">
 
  <div className="card-body">
  <img className="img-fluid" src={card3} alt="" /></div>
</div>
        </div>

        <div className="col-md-3 mt-2 ">
        <div className="card shadow ">
 
  <div className="card-body">
  <img className="img-fluid" src={card2} alt="" /></div>
</div>
        </div>


      </div>

      {/* 3rd Row */}



      
      </div>
      </div>
  );
};

export default DashBoard;
