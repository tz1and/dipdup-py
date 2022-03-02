from os.path import dirname
from os.path import join

import pytest
from _pytest.tmpdir import TempPathFactory

from dipdup.config import CustomConfig
from dipdup.config import DipDupConfig


class TestCustomConfig:
    @pytest.fixture(scope="session")
    def dummy_config_path(self) -> str:
        return join(dirname(dirname(__file__)), 'dipdup.yml')

    @pytest.fixture(scope="session")
    def config_with_custom_section_path(self, dummy_config_path: str, tmp_path_factory: TempPathFactory) -> str:
        config_file = tmp_path_factory.mktemp('config') / 'dipdup.yml'
        with open(dummy_config_path, 'r') as f:
            config_raw = f.read()

        custom_raw = """

custom:
    foo: bar
    spam:
      - eggs
      - rice

"""
        with open(config_file, 'a') as f:
            f.write(config_raw)
            f.write(custom_raw)

        return str(config_file)

    @staticmethod
    def test_empty_custom_section(dummy_config_path: str):
        config = DipDupConfig.load([dummy_config_path], False)
        config.initialize(True)
        assert hasattr(config, 'custom')
        assert config.custom is None

    @staticmethod
    def test_custom_section_items(config_with_custom_section_path: str):
        config = DipDupConfig.load([config_with_custom_section_path], False)
        config.initialize(True)

        assert hasattr(config, 'custom')
        assert isinstance(config.custom, CustomConfig)

        assert getattr(config.custom, 'foo') == 'bar'  # noqa

        spam = getattr(config.custom, 'spam')  # noqa
        assert isinstance(spam, list)
        assert 'eggs' in spam
        assert 'rice' in spam
