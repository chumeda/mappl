from rest_framework import permissions

class IsAuthorOfBoard(permissions.BasePermission):
    def has_object_permission(self, request, view, board):
        if request.user:
            return board.author == request.user
        return False
    