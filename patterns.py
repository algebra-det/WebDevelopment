
def main():

    user_input = int(input("Enter the digit : "))

    limit_of_digit = user_input

    user_input *= user_input

    line = 0

    number = 0

    for _ in range(user_input):
        if line==0 or line==limit_of_digit-1:
            print("0 ", end="")
            number += 1
            if number == limit_of_digit:
                print()
                line+=1
                number = 0

        else:
            if number == 0 or number == limit_of_digit-1:
                print("0 ", end="")
                number += 1
                if number == limit_of_digit:
                    print()
                    line+=1
                    number = 0
            else:
                print("1 ", end="")
                number += 1

if __name__=="__main__":
    main()
