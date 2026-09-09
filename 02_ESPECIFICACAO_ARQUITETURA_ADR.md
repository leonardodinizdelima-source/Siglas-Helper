class PrivacyController:
    def __init__(self, user_repository, logger):
        self.user_repository = user_repository
        self.logger = logger

    def handle_privacy_request(self, user_id, request_type):
        user = self.user_repository.get_user(user_id)
        if request_type == "delete":
            self.user_repository.delete_user(user)
            self.logger.log(f"User {user_id} deleted.")
        elif request_type == "anonymize":
            self.user_repository.anonymize_user(user)
            self.logger.log(f"User {user_id} anonymized.")
        else:
            self.logger.log(f"Invalid request type: {request_type}")