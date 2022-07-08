interface Bird {
    eat(): void
}
interface FlyingBird {
    fly(): void
}
interface RuningBird {
    run(): void
}
interface SwimingBird {
    swim(): void
}

class Tucan implements Bird, FlyingBird {
    public fly() {}
    public eat() {}
}

class Humminbird implements Bird, FlyingBird {
    public fly() {}
    public eat() {}
}

class Ostrich implements Bird, RuningBird {
    public eat() {}
    public run() {}
}

class Penguin implements Bird, SwimingBird {
    public eat() {}
    public swim() {}
}