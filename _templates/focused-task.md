---
title: "Focused Task"
type: templates
usage: "Focused layouts relying on user interaction"
status: alpha
layout: page
---

## Payment Step 1 Example

<div class="example">
<header role="banner">
    <div class="container container--screen ">
        <div class="masthead container--float">
            <div class="logo masthead__logo">
                <h1 class="logo__heading">
                    <a class="logo__link">
                        Barnsley Council
                    </a>
                </h1>
            </div> 
            <p class="masthead__strapline">
                Working together for a brighter future, a better Barnsley
            </p>
        </div> 
    </div>        
</header>

<!-- Main Body Container -->
<div class="container">
    <div class="main">
        <article>
            <div class="container container--page container--transactional">
                <header>
                    <div class="media__text heading__text">
                        <h1>Pay</h1>
                    </div>      
                    <div class="focus__container">
                        <section class="focus">
                            <h1 class="focus__heading"><label for="reference">Enter your reference</label></h1>
                            <form>
                                <input id="reference" type="text" class="focus__input" placeholder="e.g. 1949402" />
                                <a class="form__message" href="#">Where can I find my reference?</a>

                                <div class="focus__actions">
                                    <input type="submit" class="button button--default button--link" value="Cancel">
                                    <input type="submit" class="button button--primary button--main button--default" value="Next">
                                </div>
                                

                            </form>

                        </section>          
                    </div>
                </header>
            </div> 
        </article>
    </div>
</div>
</div>

### Guidelines

 - Reference should be interpreted and used to determine what the user wishes to pay, the reference should be shown on the following screens as well as a confirmation of the service the user is paying for e.g. 'Parking Fine' or 'Council Tax'

## Payment Step 2 Example
<div class="example">
<header role="banner">
    <div class="container container--screen ">
        <div class="masthead container--float">
            <div class="logo masthead__logo">
                <h1 class="logo__heading">
                    <a class="logo__link">
                        Barnsley Council
                    </a>
                </h1>
            </div> 
            <p class="masthead__strapline">
                Working together for a brighter future, a better Barnsley
            </p>
        </div> 
    </div>        
</header>

<!-- Main Body Container -->
<div class="container">
    <div class="main">
        <article>
            <div class="container container--page container--transactional">
                <header>
                    <div class="media__text heading__text">
                        <h1>Pay</h1>
                    </div>      
                    <div class="focus__container">
                        <section class="focus">
                            <h1 class="focus__heading">You want to pay your <strong class="focus__keyword">Council Tax</strong> </h1>
                            <form>
                                <label for="amount">How much would you like to pay?</label>
                                <input id="amount" type="text" class="focus__input" placeholder="e.g. £49.39" />

                                <div class="focus__actions">
                                    <input type="submit" class="button button--default button--link" value="Cancel">
                                    <input type="submit" class="button button--default" value="Add to basket">
                                    <input type="submit" class="button button--primary button--main button--default" value="Pay now">
                                </div>                            

                                <div class="focus__alternative">
                                    <ul class="focus__options ui-list">
                                        <li class="focus__option__item">
                                            <div class="focus__option__text">
                                                Did you know you can set up automatic monthly payments via Direct Debit?
                                            </div>
                                            <div class="focus__option__actions">
                                                <input type="submit" class="button button--default button--primary" value="Set up Direct Debit">
                                            </div>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </form>

                        </section>          
                    </div>
                </header>
            </div> 
        </article>
    </div>
</div>
</div>

### Guidelines

 - Payment field should accept values such as £30, £30.00, £30.5, 30.5, 20 and assume whole number payments are whole pounds - the 'interpreted' figure must be repeated on following screens as a confirmation.

## Payment Step 3 Example
<div class="example">
<header role="banner">
    <div class="container container--screen ">
        <div class="masthead container--float">
            <div class="logo masthead__logo">
                <h1 class="logo__heading">
                    <a class="logo__link">
                        Barnsley Council
                    </a>
                </h1>
            </div> 
            <p class="masthead__strapline">
                Working together for a brighter future, a better Barnsley
            </p>
        </div> 
    </div>        
</header>

<!-- Main Body Container -->
<div class="container">
    <div class="main">
        <article>
            <div class="container container--page container--transactional">
                <header>
                    <div class="media__text heading__text">
                        <h1>Pay</h1>
                    </div>      
                    <div class="focus__container">
                        <section class="focus">
                            <h1 class="focus__heading">How would you like to pay <strong>£49.31</strong> on your <strong class="focus__keyword">Council Tax</strong> </h1>                                                           
                                <ul class="focus__options ui-list">
                                    <li class="focus__option__item">
                                        <div class="focus__option__text">
                                            <strong>Debit / Credit Card</strong><br/>
                                            One-off payment using your Visa, Mastercard or American Express debit/credit card.
                                        </div>
                                        <div class="focus__option__actions">
                                            <input type="submit" class="button button--default button--primary" value="Pay via Debit/Credit Card">
                                        </div>
                                    </li>
                                    <li class="focus__option__item">
                                        <div class="focus__option__text">
                                            <strong>Barclays Pingit</strong><br/>
                                            Send and receive money using just your mobile
                                        </div>
                                        <div class="focus__option__actions">
                                            <input type="submit" class="button button--default button--primary" value="Pay via Barclays Pingit">
                                        </div>
                                    </li>
                                </ul>
                                </div>
                            </form>

                        </section>          
                    </div>
                </header>
            </div> 
        </article>
    </div>
</div>
</div>

## Payment Step 4 Example
<div class="example">
<header role="banner">
    <div class="container container--screen ">
        <div class="masthead container--float">
            <div class="logo masthead__logo">
                <h1 class="logo__heading">
                    <a class="logo__link">
                        Barnsley Council
                    </a>
                </h1>
            </div> 
            <p class="masthead__strapline">
                Working together for a brighter future, a better Barnsley
            </p>
        </div> 
    </div>        
</header>

<!-- Main Body Container -->
<div class="container">
    <div class="main">
        <article>
            <div class="container container--page container--transactional">
                <header>
                    <div class="media__text heading__text">
                        <h1>Pay</h1>
                    </div>      
                    <div class="focus__container">
                        <section class="focus">
                            <h1 class="focus__heading">Great! You've paid <strong>£49.31</strong> on your <strong class="focus__keyword">Council Tax</strong> </h1>  

                            <p>Your payment receipt is<br/>
                            <span class="focus__large">3948234</span><br/>
                            We'll send you a receipt by email or text message depending on your contact details. You can also print this page.
                            </p>
                            <a class="button button--default button--link" href="#">Make another payment</a><br/>
                            <a href="#" class="button button--default button--primary">Finish</a>
                            
                        </section>          
                    </div>
                </header>
            </div> 
        </article>
    </div>
</div>
</div>
