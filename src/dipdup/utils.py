from contextlib import asynccontextmanager
import re
from typing import Optional

from tortoise import Tortoise


def snake_to_camel(value: str) -> str:
    return ''.join(map(lambda x: x[0].upper() + x[1:], value.split('_')))


def camel_to_snake(name):
    name = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\1_\2', name).lower()


@asynccontextmanager
async def tortoise_wrapper(url: str, models: Optional[str] = None):
    try:
        modules = {'int_models': ['dipdup.models']}
        if models:
            modules['models'] = [models]
        await Tortoise.init(
            db_url=url,
            modules=modules,  # type: ignore
        )
        yield
    finally:
        await Tortoise.close_connections()
