import { test } from "qunit";
import moduleForAcceptance from "team-todo/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | todos", {
  beforeEach() {
    visit("/todos");
  }
});

test("visiting todos", assert => {
  andThen(() => {
	  assert.equal(currentURL(), "/todos");
  });
});

test("should show welcome message", assert => {
  andThen(() => {
    assert.equal(find(".header").text(), "Welcome");
  });
});

test("should show a form with input field", assert => {
  andThen(() => {
    assert.equal(find("input.new-todo").val(), "");
  });
});

test("should show an add button", assert => {
  andThen(() => assert.equal(find("button.submit").text(), "Add Todo"));
});

test("should show newly added todo to top of todos", assert => {
  fillIn("input.new-todo", "Skate");
  click("button.submit");
  andThen(() => assert.equal(find("ul.todos li:first").text(), "Skate"));
});
