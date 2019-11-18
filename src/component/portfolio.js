import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
class Home extends React.Component {
    render() {
        return (
           <div className = "pl-3 pr-3">
            <div className = "row">
                <div className = "col-lg-6 col-md-12 col-sm-12 jumbotron" style = {{backgroundColor:"#0E6E84"}}>
                    <img src = "portfolio1.jpeg"  style = {{borderRadius: "75%", border: "7px solid yellow", height : "150px",width:"150px", marginLeft:'-200px'}}></img>
                        <div className = "offset-5">
                            <h1 style = {{fontFamily: "Open Sans", fontSize: "38px"}} className = "text-light"><b>Suraj Kumar</b></h1>
                            {/* <h1 style = {{fontFamily: "Open Sans", fontSize: "38px"}} className = "text-light"><b>Kumar</b></h1> */}
                            <h5><b>Full Stack Developer</b></h5>
                            <div className = "row mt-3">
                                <img className  = "col-2 mr-n5 offset-2" src = "location.svg" style = {{height: "20px", width: "50px"}}></img>
                                <h6 className = "col-10 mr-n4" style={{marginLeft:"-20px"}}> Bengaluru, Karnataka, India</h6>
                            </div>
                            <h6 className = "mt-3 text-light offset-2">A passionate aspiring Full Stack Developer skilled in MERN stack, moulded and shaped by Masai School's numerous training. Actively ready to join in a great 
                            lively team of a good start-up to adapt me in any situation and environment with ease and perform the best.</h6>
                        </div>
                        <div className = "row mt-5 offset-5">
                          
                            <div className = "col-2 ml-5">
                               <a href = "https://www.linkedin.com/in/suraj-kumar-3317a6141/"><img src = "https://image.flaticon.com/icons/svg/145/145807.svg" style = {{height: "30px", width:"30px"}}></img></a>
                            </div>
                           
                            <div className = "col-2 ml-4">  
                               <a href ="https://github.com/surrajjha"><img src = "https://image.flaticon.com/icons/svg/733/733609.svg" style = {{height: "30px", width:"30px"}}></img></a>
                            </div>
                            <div className = "col-2 ml-4">
                                <a href = "https://www.hackerrank.com/surrajjha?hr_r=1"><img src = "https://brandfolder.com/hackerrank/logo/hackerrank-primary-logo.png" style = {{height: "30px", width:"30px"}}></img></a>
                            </div>
                           
                        </div>  
                </div>
                    
                    
                    <div className="col-lg-6 col-md-12 col-sm-12 jumbotron" style={{ backgroundColor: "#36ADA4" }}>
                        <div className="row">
                            <div className="col-4">
                                <img src="html.svg" style={{ height: "80px", width: "80px", borderRadius: "50%" }}></img><br></br><br></br>
                                <h3 className="text-lighth" style={{ fontSize: "18px" }}>HTML</h3>
                            </div>
                            <div className="col-4">
                                <img src="css.svg" style={{ height: "80px", width: "80px" }}></img><br></br><br></br>
                                <h3 className="text-lighth" style={{ fontSize: "18px" }}>CSS</h3>
                            </div>
                            <div className="col-4">
                                <img src="js.svg" style={{ height: "80px", width: "80px", borderRadius: "50%" }}></img><br></br><br></br>
                                <h3 className="text-lighth" style={{ fontSize: "18px" }}>Javascript</h3>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-4">
                                <img src="bootstrap.svg" style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img><br></br><br></br>
                                <h3 className="text-lighth" style={{ fontSize: "18px" }}>Bootstrap</h3>
                            </div>
                            <div className="col-4">
                                <img src="react.svg" style={{ height: "100px", width: "100px" }}></img><br></br><br></br>
                                <h3 className="text-lighth" style={{ fontSize: "18px" }}>React</h3>
                            </div>
                            <div className="col-4">
                                <img src="redux.png" style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img><br></br><br></br>
                                <h3 className="text-lighth" style={{ fontSize: "18px" }}>Redux</h3>
                            </div>
                        </div>
                        <br></br>
                        {/* <div className="offset-3">
                            <div className="col-4">
                                <img className="offset-5" src="python.svg" style={{ height: "100px", width: "100px", marginLeft: "60px",marginRight:"60px" }}></img><br></br><br></br>
                                <h3 style={{ fontSize: "18px", marginLeft: "110px" }}>Python</h3>
                            </div>
                        </div>
                    </div> */}
                     {/* <div className = "offset-3">
                                    <div className = "col-4">
                                        <img className = "offset-8" src = "python.svg" style = {{height: "100px", width: "100px"}}></img>
                                        <h3 className = "offset-8 mt-4" style={{ fontSize: "18px", marginLeft: "110px" }}>Python</h3>
                                    </div>
                            </div> */}
                            <div className = "row" >
                            <div className="col-4">
                                <img src="python.svg" style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img><br></br><br></br>
                                <h3 className="text-lighth" style={{ fontSize: "18px" }}>Python</h3>
                            </div>
                           
                            <div className="col-4">
                                <img src="git1.png" style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img><br></br><br></br>
                                <h3 className="text-lighth" style={{ fontSize: "18px" }}>Git</h3>
                            </div>
                            <div className="col-4">
                                <img src="flask.png" style={{ height: "100px", width: "100px", borderRadius: "50%" ,marginLeft:"30px"}}></img><br></br><br></br>
                                <h3 className="text-lighth" style={{ fontSize: "18px" ,marginLeft:"30px"}}>Flask</h3>
                            </div>
                            </div>
                        </div>
                </div>
                <hr></hr>
                <div className="jumbotron-fluid pl-3 pr-3">
                    <h1 className="text-center">Proficiencies</h1><br></br><br></br>
                    <div className="row text-center">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img src="frontend.jpeg" style={{ height: "110px", width: "110px" }}></img>
                            <h3>Frontend</h3>
                            <p>Now just that I <br></br>can even host the show</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img src="backend.jpeg" style={{ height: "110px", width: "110px" }}></img>
                            <h3>Backend</h3>
                            <p>I am the one who runs the Show</p>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <img src="react.svg" style={{ height: "110px", width: "110px" }}></img>
                            <h3>React App</h3>
                            <p>When it comes to react app <br></br> I have the strength of Atlas</p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="jumbotron-fluid pl-3 pr-3 mt-5">
                    <h1 className="text-center">Projects</h1> <br></br><br></br>
                    <CardDeck className="row">
                        <Card className="col-lg-4 col-md-12 col-sm-12">
                            <Card.Img variant="top" src="w1.png" />
                            <Card.Body>
                                <Card.Title>Panda</Card.Title>
                                <Card.Text>
                                Single page created with HTML and inline CSS only.
                            </Card.Text>
                            </Card.Body>
                            <a href = "https://github.com/surrajjha/masai-week-1" className = "btn btn-outline-danger mb-5">View Project</a>
                        </Card>
                        <Card className="col-lg-4 col-md-12 col-sm-12">
                            <Card.Img variant="top" src="w2.png" />
                            <Card.Body>
                                <Card.Title>Dog</Card.Title>
                                <Card.Text>
                                Designed four pages for Dog using HTML and CSS
                            </Card.Text>
                            </Card.Body>
                            <a href = "https://github.com/surrajjha/masai-week-2" className = "btn btn-outline-danger mb-5">View Project</a>
                        </Card>
                        <Card className="col-lg-4 col-md-12 col-sm-12">
                            <Card.Img variant="top" src="w3.png" />
                            <Card.Body>
                                <Card.Title>Tic Tac Toe</Card.Title>
                                <Card.Text>
                                Designed Tic Tac Toe game using HTML , CSS and JavaScript
                            </Card.Text>
                            </Card.Body>
                            <a href = "https://github.com/surrajjha/masai-week-3" className="btn btn-outline-danger mb-5">View Project</a>
                        </Card>
                    </CardDeck>
                    <CardDeck className="row">
                        <Card className="col-lg-4 col-md-12 col-sm-12">
                            <Card.Img variant="top" src="w5.png" />
                            <Card.Body>
                                <Card.Title>Dog API</Card.Title>
                                <Card.Text>
                                Designed Dog page using JavaScript, Jquerry and API call (SWAPI)
                            </Card.Text>
                            </Card.Body>
                            <a href = "https://github.com/surrajjha/masai-week-5" className = "btn btn-outline-danger mb-5">View Project</a>
                        </Card>
                        <Card className="col-lg-4 col-md-12 col-sm-12">
                            <Card.Img variant="top" src="w7.png" />
                            <Card.Body>
                                <Card.Title>Microsoft</Card.Title>
                                <Card.Text>
                                Designed Landing Page of Microsoft using React.
                            </Card.Text>
                            </Card.Body>
                            <a href="https://github.com/surrajjha/masai-week-7" className="btn btn-outline-danger mb-5">View Project</a>
                        </Card>
                        <Card className="col-lg-4 col-md-12 col-sm-12">
                            <Card.Img variant="top" src="w8.png" />
                            <Card.Body>
                                <Card.Title>Food Delivery System</Card.Title>
                                <Card.Text>
                                Designed Food Delivery System using React and redux.
                            </Card.Text>
                            </Card.Body>
                            <a href = "https://github.com/surrajjha/masai-week-8" className="btn btn-outline-danger mb-5">View Project</a>
                        </Card>
                    </CardDeck>
                    <br></br>
                    <hr></hr>
                    <h1 className="text-center">Major Project</h1> <br></br><br></br>
                    <CardDeck className="row">
                        <Card className="col-lg-12 col-md-12 col-sm-12">
                            <Card.Img variant="top" src="final.png" style = {{height:"250px"}}/>
                            <Card.Body>
                                <Card.Title>Donation Barter System</Card.Title>
                                <Card.Text>
                                Designed 1st Complete End to End Frond End Project Using React, Redux and Firebase
                            </Card.Text>
                            </Card.Body>
                            <a href = "https://github.com/gaaithri/MasaiFrontEnd" className="btn btn-outline-danger mb-5">View Project</a>
                        </Card>
                       
                      
                    </CardDeck>
                </div>
                    <hr></hr>
                {/* <div className="jumbptron-fluid pl-3 pr-3" style={{ backgroundColor: "#0E6E84" }}>
                    <div className="row text-center pl-3">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="mt-5 offset-2" style={{ width: "150px", height: "150px", background: "#C8F2EE", borderRadius: "50%", border: "20px solid", borderColor: "white white #06BEB6 #06BEB6" }}>
                                <div className="text-center display-5 font-weight-bold" style={{ marginTop: "40px" ,marginRight:"10px"}}>
                                    800+
                                 </div>
                            </div>
                             <div className=" display-4 mt-3 font-weight-bold text-light" style= {{color:"#5D86B4",marginRight: "130px", fontSize : "20px" }}>Hours of Full Stack Coding</div>
                            <div className=" display-4 mt-3 font-weight-bold text-light" style={{ color: "#5D86B4",marginRight:"120px" ,fontSize: "25px"}}>Hours</div>
                            <div className="offset-1  text-light" style={{ fontSize: "25px", marginRight: "130px", color: "#5D86B4" }}>
                                of full stack coding
                                 </div>
                       </div>
  
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="mt-5 offset-2" style={{ width: "150px", height: "150px", background: "#C8F2EE", borderRadius: "50%", border: "20px solid", borderColor: "yellow yellow white white" }}>
                                <div className="text-center display-5 font-weight-bold" style={{ marginTop: "40px" }}>
                                    120+
                                 </div>
                            </div>
                            <div className=" display-4 mt-3 font-weight-bold text-light" style= {{color:"#5D86B4", fontSize : "20px" ,marginRight: "120px"}}>Hackerrank Problem</div> 
                            <div className=" display-4 mt-3 font-weight-bold text-light" style={{ color: "#5D86B4" ,fontSize:"25px",marginRight:"120px"}}>HackerRank </div>
                            <div className="offset-1 text-light" style={{ fontSize: "25px", marginRight: "130px", color: "#5D86B4" }}>
                                Problems</div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className="mt-5 offset-2" style={{ width: "150px", height: "150px", background: "#C8F2EE", borderRadius: "50%", border: "20px solid", borderColor: "white green green white" }}>
                                <div className="text-center display-5 font-weight-bold" style={{ marginTop: "40px" }}>
                                    190+
                                 </div>
                            </div>
                            <div className="display-4 mt-3 ml-n5 font-weight-bold text-light" style= {{color:"#5D86B4", fontSize : "20px" ,marginRight:"60px"}}>Git Commits</div>
                            <div className=" display-4 mt-3 font-weight-bold text-light" style={{ color: "#5D86B4",marginRight:"120px" ,fontSize:"25px"}}>Git</div>
                            <div className="offset-1 text-light" style={{ fontSize: "25px", marginLeft: "-5px", color: "#5D86B4",marginRight:"120px" }}>
                                Commits
                                 </div>
                        </div>
                    </div>
                   
                </div>
            </div>
 */}
{/* </div> */}

<div className = "jumbptron-fluid pl-3 pr-3" style = {{ background: "linear-gradient(#2980b9, #2c3e50)"}}>
<div className = "row text-center pl-3">
    <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
        <div className="mt-5 offset-3" style={{width: "150px",height:"150px", background: "#C8F2EE", borderRadius: "50%", border:"20px solid", borderColor: "white white #06BEB6 #06BEB6"}}>
        <div className="text-center display-5 mt-4 font-weight-bold" style = {{marginTop: "60px",fontSize : "30px"}}>
            800+
        </div>
        </div>
        <div className=" display-4 mt-2 font-weight-bold text-light" style= {{color:"#5D86B4", fontSize : "20px" }}>Hours of Full Stack Coding</div>
    </div>
    <div className = "col-lg-4 col-md-6 col-sm-12 mt-3">
        <div className="mt-5 offset-3" style={{width: "150px",height:"150px", background: "#C8F2EE", borderRadius: "50%", border:"20px solid", borderColor: "yellow yellow white white"}}>
        <div className="text-center display-5 mt-4 font-weight-bold" style = {{marginTop: "60px",fontSize : "30px"}}>
            120+
        </div>
        </div>
        <div className=" display-4 mt-2 font-weight-bold text-light" style= {{color:"#5D86B4", fontSize : "20px" }}>Hackerrank Problem</div>         
    </div>
    <div className = 'col-lg-4 col-md-6 col-sm-12 mt-3'>
        <div className="mt-5 offset-3" style={{width: "150px",height:"150px", background: "#C8F2EE", borderRadius: "50%", border:"20px solid", borderColor: "white green green white"}}>
        <div className="text-center display-5 mt-4 font-weight-bold" style = {{marginTop: "60px",fontSize : "30px"}}>
            190+
            
            
        </div>
        </div>
        <div className="display-4 mt-2 ml-n5 font-weight-bold text-light" style= {{color:"#5D86B4", fontSize : "20px" }}>Git Commits</div>
    </div>
</div>
</div>
</div>


        )
    }
}
export default Home;




  // <div className=" pl-3 pr-3">
            //     <div className="row">
            //         <div className="col-lg-6 col-md-12 col-sm-12 jumbotron" style={{ backgroundColor: "#0E6E84" }}>
            //             <img src="portfolio1.jpeg" className="offset-1" style={{ borderRadius: "75%", border: "7px solid yellow", height: "150px", width: "150px",marginRight:"200px" }}></img>
            //             <div className="offset-5">
            //                 <h1 style={{ fontFamily: "Open Sans", fontSize: "38px",marginRight:"100px" }} className="text-light"><b>Suraj</b></h1>
            //                 <h1 style={{ fontFamily: "Open Sans", fontSize: "38px",marginRight:"100px" ,marginLeft:"20px"}} className="text-light"><b>Kumar</b></h1>
         
            //                 <h5 className="offset-1"style={{marginRight:"80px",marginLeft:"70px"}}><b>Full Stack Develpoer</b></h5>
            //                 <div className="row mt-3">
            //                     <div className="col-2 ml-2 " >
            //                         <img src="location.svg" style={{ float: "left", height: "20px", width: "50px", marginLeft: "50px" }}></img>
            //                     </div>
            //                     <h6 className="col-8 ml-3"> Bengaluru, Karnataka, India</h6>
            //                 </div>
            //                 <h6 className="mt-3 text-white">A passionate aspiring Full Stack Developer skilled in MERN stack, moulded and shaped by Masai School's numerous training. Actively ready to join in a great 
            //                         lively team of a good start-up to adapt me in any situation and environment with ease and perform the best.
            //                     </h6>
            //             </div>
            //             <div className = "row mt-5 offset-5">
                                  
            //                         <div className = "col-1 ml-4 ">
            //                            <a href = "https://www.linkedin.com/in/suraj-kumar-3317a6141/"><img src = "https://image.flaticon.com/icons/svg/145/145807.svg" style = {{height: "30px", width:"30px"}}></img></a>
            //                         </div>
            //                         <div className = "col-1 ml-4">
            //                             <a href = "https://twitter.com/suraj_jha1996"><img src = "https://image.flaticon.com/icons/svg/185/185961.svg" style = {{height: "30px", width:"30px"}}></img></a>
            //                         </div>
            //                         <div className = "col-1 ml-4">
            //                            <a href ="https://github.com/surrajjha"><img src = "https://image.flaticon.com/icons/svg/733/733609.svg" style = {{height: "30px", width:"30px"}}></img></a>
            //                         </div>
            //                         <div className = "col-1 ml-4">
            //                             <a href = "https://www.hackerrank.com/surrajjha?hr_r=1"><img src = "https://brandfolder.com/hackerrank/logo/hackerrank-primary-logo.png" style = {{height: "30px", width:"30px"}}></img></a>
            //                         </div>
                                    
            //                     </div>  
            //             </div>