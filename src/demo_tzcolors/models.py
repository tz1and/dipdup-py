from enum import IntEnum

from tortoise import Model, fields


class AuctionStatus(IntEnum):
    ACTIVE = 0
    FINISHED = 1


class Address(Model):
    address = fields.CharField(59, pk=True)


class Token(Model):
    id = fields.IntField(pk=True)
    address = fields.CharField(59)
    amount = fields.IntField()
    level = fields.IntField()
    timestamp = fields.DatetimeField()
    holder = fields.ForeignKeyField('models.Address', 'tokens')


class Auction(Model):
    id = fields.IntField(pk=True)
    token = fields.ForeignKeyField('models.Token', 'auctions')
    bid_amount = fields.IntField()
    bidder = fields.ForeignKeyField('models.Address', 'winning_auctions')
    seller = fields.ForeignKeyField('models.Address', 'created_auctions')
    end_timestamp = fields.DatetimeField()
    status = fields.IntEnumField(AuctionStatus)
    level = fields.IntField()
    timestamp = fields.DatetimeField()


class Bid(Model):
    id = fields.IntField(pk=True)
    auction = fields.ForeignKeyField('models.Auction', 'bids')
    bid_amount = fields.IntField()
    bidder = fields.ForeignKeyField('models.Address', 'bids')
    level = fields.IntField()
    timestamp = fields.DatetimeField()
