---
title: "Principles"
type: principles
usage: "General design principles"
status: production
layout: page
---

## Form principles

These are principles that you should keep in mind when building forms so we can provide customers a consistent experience that exceeds their expectations.

### Personal details

We should only ask for personal details when customers need access to their private information. Reporting something to us that is not personal to the customer should be possible anonymously. 

### Important first & gradual engagement

When presenting forms to customers the most important information should be the first questions we ask. For example; When reporting graffiti the first information the customer should be asked for is the location of the graffiti. 

When the customer is filling in an e-form we should collect information in the following order:

 - Incident details
 - Personal details
 - Payment details


### Fewer fields

Capture only the data you need, every additional form field increases the likelyhood of a customer abandoning the transaction. 

### Exposing Options

When a small amount of options (generally less than 4) are available, don't hide them in a dropdown box they should be exposed via checkboxes or radio buttons.

### Showing state

Make sure it's clear how far a customer is through a given journey, show them the number of steps they're on and how far through they are - and make sure important details such as the number of items and total value of the basket are visible throughout the journey.

### Design for zero data

Use zero data states to provide an indication of what to do next; for example, rather than simply stating 'Your shopping cart is empty'. You should provide a simple, natural language link to add a reference number in order to make a payment as shown in the below example:

<div class="example">
    <div class="message message--info">
    Your shopping cart is empty - <a href="#">add your payment</a>
    </div>
</div>

### Smart defaults

If we have enough information to suggest a smart default for a customer, we should pre-fill this information for them; for example, if a customer needs to provide both a billing and delivery address, it's a reasonable assumption that they will be the same - the second address should be pre-filled with the first. Although it should still be easy to change and replace these values.

### Forgiving formats

When asking for user entry, rather than using complicated input types that require several mouse clicks, we should allow input in natural language and intepret it accurately on the server.

For example; when asking for a duration in time in hours 2.5 and 2:30 should be interpreted as 2 and a half hours.

Whenever a forgiving format is used we should provide a confirmation to verify we've interpreted the format correctly before completing a transaction.

### Inline validation

We should provide client side inline validation in addition to server side validation on forms to allow quick error error corrections. 

### Progressive disclosure

Form fields should only be displayed when they are relevant; For example, when we ask a customer if they wish to be anonymous or provide their details we shouldn't display fields asking for their personal details until they have opted for this option. 

### Natural language 

We may have circumstances where our form entry would benefit from natural language input, particularly when confirming details back to customers to allow them to change the entry prior to submission. 

<div class="example">

<p>I'd like you to collect <input type="number" min="1" max="20" size="2" /> bags of <select><option>clinical waste</option><option>bananas</option><option>videotapes</option></select> for disposal for <select><option>me</option><option>someone else</option></select></p>

</div>

### Set expectations

Prior to completing a transaction, or during feedback - we should provide an indication where possible of how long it will take for any recognizable outcome as a result of their query.

### Provide feedback

When completing any activity, clear feedback should be shown to the user relating to the outcome. For example; submitting an e-form should thank the user for their report (and if possible provide a reference number). 

The same is true for internal applications, when users perform operations against data feedback should be displayed. For example; a list of documents which can be added or deleted, both these operations should display a feedback message.