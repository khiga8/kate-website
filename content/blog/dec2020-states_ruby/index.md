---
title: Understanding blank?, present?, empty?, any?, and nil? in Ruby
date: "2020-12-26"
tags: ruby, ruby-on-rails
---

In Ruby on Rails, there are several methods available for checking the state of an object.
The most common ones include:

- `blank?`
- `present?`
- `empty?`
- `any?`
- `nil?`

It can be pretty confusing to know which method to use and when. For instance, `blank?` and `empty?` sound like they would behave the same way. However, they are NOT the same.

Take the following example:

```ruby
nil.blank?
=> true

nil.empty?
=> NoMethodError
```

As you can see, these two methods respond differently to `nil` and are not interchangeable.
It's helpful to understand the nuances of these different state-checking methods so you aren't caught off guard by unexpected behavior.

Let's dive in.

## 1. `blank?`

`blank?` is a Rails method defined at the `Object` class level meaning you can call it on **any object**. An object is blank if it’s **false, empty, or a whitespace string**.

[docs][1]

Examples:

```ruby
[].blank?
=> true

{}.blank?
=> true

''.blank?
=> true

' '.blank?
=> true

false.blank?
=> true

nil.blank?
=> true
```

## 2. `present?`

`present?` is another Rails method that is defined at the `Object` class level. It behaves the opposite of `blank?`. In other words, it returns true for objects that are **true, not empty, and not a whitespace string.**

[docs][2]

Examples:

```ruby
[1, 2, 3].present?
=> true

{1:'Dog', 2: 'Cat'}.present?
=> true

'poop'.present?
=> true

'hi'.present?
=> true

true.present?
=> true

nil.present?
=> false
```

## Note 📝

- `blank?` and `present?` are direct opposites.
- `blank?` and `present?` can be called on any object type including `nil`. This **may be too all-encompassing and undesirable** in some cases. For example, say you expect your data to never be `nil`. If your data ends up as `nil` due to some bug in your codepath, these two state-checking methods will make it harder to uncover that fact as opposed to methods like `any?` or `empty?` which would throw a `NoMethodError` for `nil`. Keep in mind that for stricter type-checking purposes, `blank?` and `present?` may be unsuitable.

## 3. `nil?`

`nil?` is a Ruby method defined at the `Object` class level so it can be called on any object similar to the first two. `nil?` only return true for `nil`.

[docs][3]

Examples:

```ruby
[].nil?
=> false

{}.nil?
=> false

''.nil?
=> false

' '.nil?
=> false

false.nil?
=> false

nil.nil?
=> true
```

## 4. `empty?`

`empty?` is a Ruby method defined for classes including `String`, `Hash`, and `Array`
and will evaluate to true if the length of the object it is called on is 0.

In particular:

- For strings, `empty?` evaluates to true if the string has a length of zero. [docs - String][4]

- For hashes, `empty?` \*\*returns true if the hash contains no key-value pairs. [docs - Hash][5]

- For arrays, `empty?` returns true if the array contains no elements. [docs - Array][6]

Examples:

```ruby
[].empty?
=> true

{}.empty?
=> true

''.empty?
=> true

' '.empty?
=> false

nil.empty?
=> NoMethodError
```

## Note 📝

- `blank?` and `empty?` respond differently to strings containing whitespace characters.

```ruby
" ".length
=> 1

" ".blank?
=> true

" ".empty?
=> false

```

`blank?` may be more suitable for rejecting data with whitespace characters.

## 5. `any?`

[docs][7]

`any?` is a Ruby method defined for the `Enumerable` module, which encompass collection
classes including `Array` and `Hash`. It **returns true if at least one of the collection
member is not false or nil.**

Examples:

```ruby
[false].any?
=> false

[true].any?
=> true

[].any?
=> false

{}.any?
=> false

''.any?
=> NoMethodError

nil.any?
=> NoMethodError
```

It's worth calling out that `any?` is NOT a direct opposite of `empty?`, like `present?` and `blank?` are.
It's also worth calling out that truthiness of the elements within the collection matters for `any?`, unlike
the other methods discussed here.

Consider the following:

```ruby

[false, nil].any?
=> false

[false, nil].empty?
=> false

[false, nil].present?
=> true
```

### Additionally,

`any?` can accept a block. Each element of the collection gets passed to the block, and the method will evaluate to true if the block ever returns a value that is not false or nil.

Examples:

```ruby
[1, 2, 3].any? { |number| number.even? }
=> true

['poop', 'soup', 'loop'].any? { |word| word == 'poop' }
=> true

[2, 4, 6].any? { |number| number.odd? }
=> false
```

## Conclusion

|           | `blank?`    | `present?`  | `nil?`      | `empty?`                                   | `any?`          |
| --------- | ----------- | ----------- | ----------- | ------------------------------------------ | --------------- |
|           | Rails       | Rails       | Ruby        | Ruby                                       | Ruby            |
|           | [Object][1] | [Object][2] | [Object][3] | [String][4] <br> [Hash][5] <br> [Array][6] | [Enumerable][7] |
| `[]`      | true        | false       | false       | true                                       | false           |
| `{}`      | true        | false       | false       | true                                       | false           |
| `nil`     | true        | false       | true        | NoMethodError                              | NoMethodError   |
| `false`   | true        | false       | false       | NoMethodError                              | NoMethodError   |
| `""`      | true        | false       | false       | true                                       | NoMethodError   |
| `" "`     | true        | false       | false       | false                                      | NoMethodError   |
| `"poop"`  | false       | true        | false       | false                                      | NoMethodError   |
| `[false]` | false       | true        | false       | false                                      | false           |

[1]: https://apidock.com/rails/v4.2.7/Object/blank%3F
[2]: https://apidock.com/rails/Object/present%3f
[3]: https://apidock.com/ruby/Object/nil%3F
[4]: https://apidock.com/ruby/String/empty%3F
[5]: https://apidock.com/ruby/Hash/empty%3F
[6]: https://apidock.com/ruby/Array/empty%3F
[7]: https://apidock.com/ruby/Enumerable/any%3F

References:

- [How to understand nil vs. empty vs. blank in Ruby](https://stackoverflow.com/questions/885414/how-to-understand-nil-vs-empty-vs-blank-in-ruby)
- [Differences Between #nil?, #empty?, #blank?, and #present?](https://blog.appsignal.com/2018/09/11/differences-between-nil-empty-blank-and-present.html)
