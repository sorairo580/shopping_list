# アプリの概要

このアプリ「shopping_list」は、買い物リストを誰でも簡単に作成・閲覧できるアプリです。

# DB 設計

## users table

| Column             | Type   | Options                   |
|--------------------|--------|---------------------------|
| email              | string | null: false, unique: true |
| encrypted_password | string | null: false               |
| nickname           | string | null: false               |

### Association

- has_many :items
- has_many :messages


## items table

| Column           | Type       | Options                        |
|------------------|------------|--------------------------------|
| item             | string     | null: false                    |
| bought           | date       |                                |
| expiry           | date       |                                |
| genre_id         | integer    | null: false                    |
| stock            | integer    | null: false                    |
| user             | references | null: false, foreign_key: true |

### Association

- belongs_to :user


## messages table

| Column | Type       | Options                        |
|--------|------------|--------------------------------|
| content| string     | null: false                    |
| user   | references | null: false, foreign_key: true |

### Association

- belongs_to :user
