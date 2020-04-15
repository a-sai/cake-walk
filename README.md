# README

## charactersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|image|string|null: false|
### Association
- belongs_to :attribute
- belongs_to :style
- belongs_to :simple

## attributesテーブル
|Column|Type|Options|
|------|----|-------|
|type|string|null: false|
### Association
- has_many :characters

## stylesテーブル
|Column|Type|Options|
|------|----|-------|
|type|string|null: false|
### Association
- has_many :characters

## simplesテーブル
|Column|Type|Options|
|------|----|-------|
|versatility|integer|null: false|
|plan|integer|null: false|
|grade|integer|null: false|
|character_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :character



This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
