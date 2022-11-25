---
title: Understanding attr methods in Ruby
date: "2020-12-05"
tags: ruby
---

If you've worked with Ruby, you've likely encounter **attr** methods such as `attr_accessor`, `attr_reader`, and `attr_writer` sprinkled at the top of the class.

To truly understand what each of these `attr` methods are and how to use them, we must understand the very basics of how data is stored and accessed in a Ruby class!

## How is data stored and access in a Ruby class?

Let’s say we’re creating a Ruby on Rails web app for a veterinary hospital 😸🐶. We want to store information about each dog patient. To start with, we will need a `Dog` class that stores `name`.

In Ruby, this class may look something like the following:

```ruby
  class Dog
    def initialize(name)
      @name = name
    end
  end
```

Here, we have a `Dog` class. This `Dog` class has an `initialize` method which expects a `name` parameter. Within this `initialize` method we instantiate an **instance variable** `@name` which stores the `name`
parameter that is passed in when a `Dog` instance is created.

### What is an instance variable?

In Ruby, instance variables are prefixed with `@`. You may recognize instance variables being used to pass data between the controller and the view in a Ruby on Rails app. (Under the hood, Ruby on Rails is set up so that an instance variable in a controller method is accessible in the corresponding view.)

Even outside of a Rails-y context, instance variables are used to store data for a regular Ruby class.

#### An instance variable can be accessed by any method within the class.

**Here's an Example:**

```ruby
  class Dog
    def initialize(name)
      @name = name
    end

    def barks
      "#{@name} says WOOF" # This method has access to @name
    end
  end
```

The catch here is that instance variables are accessible by any method within a class, but are
NOT accessible outside the class.

**If instantiate a `Dog` instance and try to call `.name`, we get a `NoMethodError`:**

```ruby
dog = Dog.new('Tomi')
#=> <Dog:0x00007fb72cd0aa30 @name="Tomi">
dog.name
#=> NoMethodError: undefined method `name` for #<Dog:0x00007fb72eab6bb0 @name="Tomi">
```

If we want to read the `@name` value stored on a `Dog` instance, we'll need to access it
through a method.

Let's define a simple method that returns `@name`.

```ruby
  class Dog
    def initialize(name)
      @name = name
    end

    # Method that returns @name
    def name
      @name
    end
  end
```

Now we are able to access the value of `@name` by calling the name method!

```ruby
dog = Dog.new('Tomi')
dog.name
#=> "Tomi"
```

This simple `name` method we just defined is what we call a **getter** method.

### A getter method returns the value of an instance variable.

In the previous example, we had the `name` method simply return `@name`. However, if you wanted `@name` to be returned in a certain format, you can easily achieve that by customizing your getter method.

Let's write a custom getter method that returns `dog.name` in all caps:

```ruby
  class Dog
    def initialize(name)
      @name = name
    end

    def name
      @name.upcase
    end
  end
```

```ruby
dog = Dog.new('Tomi')
#=> #<Dog:0x00007fb7475df010 @name="Tomi">
dog.name
#=> "TOMI"
```

Notice that here, `@name` itself is not modified. We’ve simply defined a method that returns `@name` in the desired format.

Say we initialize a `Dog` instance but realize we have made a typo! If we try to reset `name`, we'll get a
`NoMethodError`:

```ruby
dog = Dog.new('Tomu') # Whoops!
dog.name = 'Tomi'
#=> NoMethodError: undefined method `name=' for #<Dog:0x00007fb7483dd9a0 @name="Tomu">
```

Similar to how we need to define a getter method to read the `@name` value, we also need a method to set `@name` a value. Though we're setting the value of `@name` on initialize, we don't have anything in place
to change it later.

We need a **setter method**!

### A setter method sets the value of an instance variable.

Let's create a setter method that allows us to change the name attribute:

```ruby
  class Dog
    def initialize(name)
      @name = name
    end

    # Getter method
    def name
      @name
    end

    # Setter method
    def name=(name)
      @name = name
    end
  end
```

Notice that a setter method follows the format `def attribute=(attribute)`.
Now with a setter method, we can easily update the value of `@name`:

```ruby
dog = Dog.new('Tomuu')
dog.name = 'Tomi'
dog
#=> #<Dog:0x00007fb7483dd9a0 @name="Tomi">
```

## What is `attr_accessor`, `attr_writer`, and `attr_reader`?

Now that we understand the basics of how data is stored and accessed in a Ruby class, let’s revisit the original question. What are these `attr` methods? Well... they're ✨magic✨!

Getting and setting an attribute of a class is a pretty basic operation. If we want a `Dog` class that has `name`, `breed`, `age`, and any number of attributes, we need a getter and setter method for each of these attributes. Writing methods for something very simple can quickly get very repetitive.

You might've heard of Ruby as a very developer-friendly language. Aside from being very human-readable, Ruby aims to make our lives easier via metaprogramming. In other words, as a programming language, Ruby takes care of a lot of things so that developers don't have to! `attr` methods are one of those things.

### `attr_accessor` provides a shorthand way to define getter and setter methods for specified attributes.

Desired attributes are passed in to `attr` methods as a symbol:

```ruby
  class Dog

    attr_accessor :name, :breed, :age

    def initialize(name, breed, age)
      @name = name
      @breed = breed
      @age = age
    end

  end
```

With a single `attr_accessor :name, :breed, :age` line, we were able to define six methods!

`attr_accessor` combines `attr_reader` and `attr_writer`. If you only want to shorthand a getter method, you can use `attr_reader`. If you want to shorthand a writer method, you can use `attr_writer`.

- `attr_accessor` - creates a getter and setter method
- `attr_reader` - creates a getter method only
- `attr_writer` - creates a setter method only

It might make sense to use `attr_reader` or `attr_writer` in situations where we want to customize one method, but not the other.

### Example: We want `dog.age` to return `@age` in a certain format, but don't want to change how `@age` is stored.

```ruby
  class Dog

    attr_accessor :name, :breed
    attr_writer :age # Default setter method to set @age

    def initialize(name, breed, age)
      @name = name
      @breed = breed
      @age = age
    end

    # Defining our own getter method to return a formatted age
    def age
      "Age #{@age}"
    end

  end
```

```ruby
dog = Dog.new('Tomi', 'pug', 2)
#=> #<Dog:0x00007fb72debcdf0 @age=2, @breed="pug", @name="Tomi">
dog.age
#=> "Age 2"
dog
#=> #<Dog:0x00007fb72debcdf0 @age=2, @breed="pug", @name="Tomi">
```

### Example: We want `@age` to always be set in a certain format.

```ruby

  class Dog

    attr_accessor :name, :breed
    attr_reader :age # Default getter method to read @age

    def initialize(name, breed, age)
      @name = name
      @breed = breed
      @age = "Age #{age}" # Set @age to age in desired format.
    end

    # Defining our own setter method so @age is always set in desired format
    def age=(age)
      @age = "Age #{age}"
    end

  end
```

```ruby
dog = Dog.new('Tomi', 'pug', 2)
#=> #<Dog:0x00007fb73383efe0 @age="Age 2", @breed="pug", @name="Tomi">
dog.age = 3
#=> 3
dog
#=> #<Dog:0x00007fb73383efe0 @age="Age 3", @breed="pug", @name="Tomi">
```

## Conclusion

- Instance variables hold data in a Ruby class instance.
- Instance variables can only be directly accessed within a Ruby class.
- To access an instance variable outside of a Ruby class, we must define methods.
- `attr_reader`, `attr_writer`, and `attr_accessor` are convenient shorthands for writing
  getter and setter methods.
