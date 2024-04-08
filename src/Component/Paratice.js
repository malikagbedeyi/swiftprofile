import Container from "react-bootstrap/esm/Container";

<div className="contact">
   <Container>
        <Row>
            <Col xs={4} md={6} sm={12} lg={4}>
                <div class="contact-row">
                    <h4 class="contact-heading-h4">Consultation is #FREE</h4>
                    <p class="contact-heading-p">Get a professional help today</p>

                     <h5 class="contact-heading-h5">Address</h5>
                    <p class="contact-heading-p">UK, Ireland, Germany, Canada, and US</p>

                     <h5 class="contact-heading-h5">Email</h5>
                    <p class="contact-heading-p">support@swiftprofile.com</p>

                    <h5 class="contact-heading-h5">Phone</h5>
                    <p class="contact-heading-p">+44 73 7723 2501 , +353 851 457 958</p>
                </div>
            </Col>

             <Col xs={8} md={6} sm={12} lg={8}>
                <div class="contact-row-form">
                     <h4 class="contact-heading-h4">Say Something</h4>
                     <input type="text" placeholder="Name" name="name" class="form-control">
                     <div class="row">
                         <div class="col-lg-6">
                               <input type="text" placeholder="Email" name="email" class="form-control">
                         </div>

                          <div class="col-lg-6">
                               <input type="text" placeholder="Phone Number" name="phone number" class="form-control">
                         </div>
                         <div class="col-lg-12">
                             <textarea placeholder="Your Comment" name="comment" class="form-xl"></textarea>
                         </div>
                     </div>
                      <button class="get-in-touch btn btn-large" type="submit" name="send" id="sendBtn">GET IN TOUCH</button>
                </div>
            </div>
        </div>
    </Container>
</div>


<div class="the-end">
     <div class="container-2">
      <a class="footer-link" target="_blank" href="https://www.linkedin.com/in/Agbedeyi-Malik/">LinkedIn</a>
      <a class="footer-link" target="_blank" href="https://twitter.com/Aggbedeyi-Malik">Twitter</a>
      <a class="footer-link" target="_blank" href="https://www.appbrewery.co/">Website</a>
      </div>
</div>









.contact{
    font-family: 'Roboto', sans-serif;
    padding: 5%;
}
.contact-row{
    background: #ffffff;
    padding: 5% 5% 55% 5%;
    text-align: left;
}
.contact-heading-h4{
    color: #2e3280;
    font-family: "Rubik", sans-serif;
}
.contact-heading-p{
    margin-top: 0;
    margin-bottom: 1rem;
    color: gray;
    padding-bottom: 2%;
}

.contact-heading-h5{
    color: #2e3280;
    font-family: "Rubik", sans-serif;
}
.contact-row-form{
     background: #ffffff;
    padding: 5% 0% 10% 3%;
    text-align: left;
}
.form-xl{
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    height: 150px;
    margin-bottom: 1rem;
}
.get-in-touch{
    color: #3d59e8!important;
    border: 1px solid #3d59e8!important;
    text-decoration: none!important;
    background: transparent;
    padding:3% ;
}
/*************contact end*******/
/************The End*********/
.the-end{
    background-color: black;
    height:20%;
    margin: 0;
    padding: 2%;
    text-align: center;
}
.footer-link {
font-weight: bold;
margin: 40px 20px;
font-family: 'Open Sans', sans-serif;
text-decoration: none;
}




