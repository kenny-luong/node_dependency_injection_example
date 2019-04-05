// bot.js

module.exports = class RedditBot {
  constructor(config) {
    this.dbh = config["database_handler"];
  }

  get_user_info_by_id(id) {
    return this.dbh.find_by_id(id);
  }
}

