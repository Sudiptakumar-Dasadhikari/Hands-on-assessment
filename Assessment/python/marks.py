students = {"Rahul": 45, "Amit": 72, "Sneha": 58, "Priya": 90, "Rohan": 35}

print("All Students:")
for name, marks in students.items():
    print(name, "-", marks)

print("\nScored 50 or above:")
for name, marks in students.items():
    if marks >= 50:
        print(name)

highest = max(students.values())
print("\nHighest mark:", highest)