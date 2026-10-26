products = {"Rice": 450, "Oil": 220, "Sugar": 90, "Tea": 180, "Soap": 120}

def calculate_total(items):
    return sum(items.values())

print("Products:")
for name, price in products.items():
    print(name, "-", price)

total = calculate_total(products)
discount = total * 0.10 if total >= 1000 else 0
final_bill = total - discount

print("\nTotal Price:", total)
print("Discount:", discount)
print("Final Bill:", final_bill)