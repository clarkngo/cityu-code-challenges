def enough(cap, on, wait):
    total_passenger = on + wait
    if total_passenger <= cap:
        return 0
    else:
        return total_passenger - cap
# other
def enough(cap, on, wait):
    return max(0, wait - (cap - on))

# other
def enough(cap, on, wait):
    return wait + on - cap if wait + on > cap else 0