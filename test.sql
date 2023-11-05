select
count(*)
from rental
where return_date is null;


select payment_id, amount
from payment
where amount <= 2;

select *
from payment
where (customer_id =30
or customer_id = 31)
and amount = 2.99;


select *
from payment
where (customer_id = 322
or customer_id = 346
or customer_id = 354)
and (amount < 2
or amount > 10)
order by customer_id, amount desc;


select *
from rental
where rental_date between '2005-05-24' and '2005-05-26'
order by rental_date desc;



select
count (*)
from payment
where payment_date between '2020-01-26' and '2020-01-28'
and amount between 1.99 and 3.99;


select *
from customer
where customer_id IN (123,212,323,243,353,432);


select * 
from payment
where customer_id IN (12,25,67,93,124,234)
and amount IN (4.99,7.99, 9.99)
and payment_date between '2020-01-01' and '2020-01-31 23:59';


select * from film 
where description like '%Drama%';


select
count (*)
from film
where description like '%Documentary%';



select
count (*)
from customer
where first_name like '___' and last_name like '%X' OR last_name like '%Y';



select
count(*) AS no_of_movies
from film
where description like '%Saga%'
and (title like 'A%'
OR title like '%R');


select * 
from customer
where first_name like '%ER%'
and first_name like '_A%'
order by last_name desc;


select
count(*)
from payment
where amount = 0
OR amount between 3.99 and 7.99
and payment_date = '2020-05-01';

SELECT
sum(amount),
round(avg(amount),3) as average
FROM payment;


select
min(replacement_cost),
max(replacement_cost),
round(avg(replacement_cost), 2),
sum(replacement_cost)
from film;

select
customer_id,
sum(amount)
from payment
group by customer_id
order by customer_id;

select
staff_id,
sum(amount),
count(amount)
from payment
WHERE amount != 0
group by staff_id;

select
staff_id,
customer_id,
sum(amount),
count(amount)
from payment
group by staff_id, customer_id
order by count(*) desc;


select
staff_id,
date(payment_date),
sum(amount),
count(*)
from payment
group by staff_id, date(payment_date)
order by sum(amount) desc;


































































